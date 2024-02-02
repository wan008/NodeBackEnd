"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);

//router.get("/", ctrl.home);
//router.get("/login", ctrl.login);

router.post("/login", ctrl.process.login);

module.exports = router;

/* V1.0 
const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);

module.exports = router;
*/

/* V0.1 initial
const router = express.Router();

router.get("/", (req,res) => {
    res.render("/home/index");
});

router.get("/login", (req,res) => {
    res.render("/home/login");
});
module.exports = router;
*/