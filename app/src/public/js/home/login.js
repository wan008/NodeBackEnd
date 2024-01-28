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

}