"use strict";

/* V1.1 Upgrade */
const output = {

    home: (req,res) => {
        res.render("home/index");
    },
    
    login: (req,res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        console.log(req.body);
    }
}

module.exports = {
    output,
    process,
};


/* V1.0 initial
//function hello(req,res) { }
const hello = (req,res) => {
    res.render("home/index");
};

const login = (req,res) => {
    res.render("home/login");
};

module.exports = {
    hello,
    login,
}
*/