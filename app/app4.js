"use restrict";

// Module
const express = require("express");
const app = express();

const PORT = 3000;

// Routing
const home = require("./routes/home");

// App Setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> method to register middle ware

app.listen(PORT, function() {
    console.log("Server is started");
});