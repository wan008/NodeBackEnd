"use restrict";

// Module
const express = require("express");
const app = express();

const PORT = 3000;

// Routing
const home = require("./src/routes/home");

// App Setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> method to register middle ware

module.exports = app;