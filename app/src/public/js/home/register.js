"use strict";

//console.log("hello");

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    //console.log(id.value);
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    }
    //console.log(req);

    
    //console.log(id.value);
    //console.log(req, JSON.stringify(req));
     fetch("/register", {
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
            location.href = "/login";
        } else {
            alert(res.msg);
        }
     })
     .catch((err) => {
        //console.error(new Error("Error in register process"));
        console.error("Error in register process - 2");
     });
     

}

//console.log(id);

