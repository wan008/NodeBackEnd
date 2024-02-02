"use restrict";

// Module
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Routing
const home = require("./src/routes/home");

// App Setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));
//data included Hangul, space will be processed

app.use("/", home); // use -> method to register middle ware

module.exports = app;