var express = require('express'), urlHandling= require('./urlWranglingMeths.js'), mongoose = require('mongoose'), bodyParser = require('body-parser'), app = express(), http = require('http');
app.use(bodyParser.urlencoded({extended:true})); // esto es para parsear el body & middleware
app.use(bodyParser.json()); //midleware 
//var charsAvailable= chars.length;
app.get("/", (req, res)=>{
    res.send(urlHandling.getTinyUrl("frag.me/GNktcm"));
    //res.json({"Message":"Url shortener under construction..."})
});
app.get("/api/getUrls"), (req, res)=>{
    res.status(200).send({
        success:'true',
        description: 'Lectura de urls registrados',
        urls: urlHandling.urls
    });
};
app.post("/api/shorten", (req, res)=>{
    res.json({user: "Toby"});
    res.sendStatus(201).send("Todo esta bien.");
});

app.listen(3000, function respond(){
    console.log("ready!");
});

//console.log(urlHandling.createTinyUrl("http://google.com"));
//console.log(urlHandling.getTinyUrl("frag.me/GNktcm"));

