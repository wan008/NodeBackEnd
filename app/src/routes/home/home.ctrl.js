"use strict";

//const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
}


const process = {

    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
       //console.log(response);
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
       //console.log(response);
        return res.json(response);
    },


    ///login: (req, res) => {
    ///    const user = new User(req.body);
    ///    const response = user.login();
    ///    //console.log(response);
    ///    return res.json(response);

        /*
        //console.log(req.body);
        const id = req.body.id,
            psword = req.body.psword;        

        //const userStorage = new UserStorage();  for declare static users in UserStorage class
        //console.log(userStorage.users);

        //console.log(UserStorage.users); // for declare static users in UserStorage class

        //console.log(UserStorage.getUsers("psword", "name"));

        const users = UserStorage.getUsers("id", "psword");
        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.lastIndexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }
        
        response.success = false;
        response.msg = "Login failed";
        return res.json(response);
        */

    ///}
    

    /*
    login: (req, res) => {
        //console.log(req.body);
        const id = req.body.id,
            psword = req.body.psword;

        //console.log(id, psword);
        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.lastIndexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }
        
        response.success = false;
        response.msg = "Login failed";
        return res.json(response);
    }
    */
}

module.exports = {
    output,
    process,
}