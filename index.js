var express = require("express");
var server = express();
//body-parser function
var bodyParser = require("body-parser");
server.use(express.static(__dirname + "/public"));
server.use(bodyParser.urlencoded());


server.get("/", (req,res)=>{
    res.send("Hello world!");
})

server.get("/about", (req,res)=>{
    res.send("Welcome to my first NodeJS server!");
})

server.listen(8080)