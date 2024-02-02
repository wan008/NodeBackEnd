"use strict";

// console.log("Hello");
// console.log("Bye");

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value
    }

    console.log(req, JSON.stringify(req));

    fetch("/login", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    //.then(console.log);
    // same ==> .then((res) => console.log(res));
    .catch((err) => {
        // same ==> console.error(new Error("Error in login process"));
        console.error("Error in login process");
    });
}