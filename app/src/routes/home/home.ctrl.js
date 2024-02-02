"use strict";

const User = require("../../models/User");
//const UserStorage = require("../../models/UserStorage");

/* V1.1 Upgrade */
const output = {
    home: (req,res) => {
        res.render("/home/index");
    },
    
    login: (req,res) => {
        res.render("/home/login");
    },
}

const process = {
    login: (req, res) => {
        console.log(req);
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(resonse);
    }
}

/*
const process = {
    login: (req, res) => {
        //console.log(req.body);
        const id = req.body.id,
            psword = req.body.psword;
        
        // for not static ==> const UserStorage = new UserStorage();
        console.log(UserStorage.getUsers("id", "psword"));
        const users = UserStorage.getUsers("id", "psword");

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.sucess = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "Login failed in login process";
        return res.json(response);
        
    }
}
*/

module.exports = {
    output,     // output: output
    process,    // process: process
};


/* V1.0 initial
//function hello(req,res) { }
const home = (req,res) => {
    res.render("home/index");
};

const login = (req,res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login,
}
*/