const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            This is root
        </body>
        </html>
    `);
});

app.get("/login", (req,res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <input type="text" placeholder="ID"><br>
            <input type="text" placeholder="email"><br>
            <button>login</button>
        </body>
        </html>
    `);
});

app.listen(3000, function() {
    console.log("Server is started");
});