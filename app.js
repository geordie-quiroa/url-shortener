var express = require('express'), encUrl= require('./testing'), mongoose = require('mongoose'), bodyParser = require('body-parser'), app = express(), http = require('http');
app.use(bodyParser.urlencoded()); // esto es para parsear el body
app.use(bodyParser.json());
//var charsAvailable= chars.length;
app.get("/", (req, res)=>{
    res.send("hello world");
});
app.post("/api/shorten", (req, res)=>{
    res.json({user: "Toby"});
    res.sendStatus(201).send("Todo esta bien.");
});


app.listen(3000, function respond(){
    console.log("ready!");
});

console.log(encUrl.encUrl("http://google.com"));

