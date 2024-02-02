

/*const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("this is root");
});

app.get("/login", (req,res) => {
    res.send("this is login");
});

app.listen(3000, function() {
    console.log("Server is started");
});
*/

const http = require("http");
const app = http.createServer( (req,res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    if (req.url === "/" ) {
        res.end("This is root");
    } else if (req.url === "/login") {
        res.end("This is login");
    }
});

app.listen(3001, () => {
    console.log("Server http is started");
});