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

console.log(`${__dirname}`);
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // use -> method to register middle ware

module.exports = app;