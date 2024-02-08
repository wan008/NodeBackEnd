"use strict";

//console.log("hello");

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
    console.log(id.value);
    const req = {
        id: id.value,
        psword: psword.value,
    }
    
    //console.log(id.value);
    console.log(req, JSON.stringify(req));
     fetch("http://192.168.1.201:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
     })
     .then((res) => res.json()) // then((res) => console.log(res.json()))
     //.then(console.log);        // then((res) => console.log(res))
     .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
     })
     .catch((err) => {
        //console.error(new Error("Error in login process"));
        console.error("Error in login process - 2");
     });

}

//console.log(id);

