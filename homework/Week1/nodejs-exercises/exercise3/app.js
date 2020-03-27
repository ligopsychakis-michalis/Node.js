"use strict";

const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
    if ( req.url == '/script.js' ) {
        fs.readFile("script.js", (err, data) => {
            res.writeHead(200,{ "Content-Type": "text/javascript" });
            res.write(data);
            res.end();  
        });
    } 
    else if(req.url == '/style.css') {
        fs.readFile("style.css", (err, data) => {
            res.writeHead(200,{ "Content-Type": "text/css" });
            res.write(data);
            res.end();  
        });
    } 
    else {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200,{ "Content-Type": "text/html" });
            res.write(data);
            res.end();
        }); 
    }
});

server.listen(3000);