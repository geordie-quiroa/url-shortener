var express = require('express'), urlHandling= require('./urlHandling.js'), 
bodyParser = require('body-parser'), app = express(), http = require('http');
app.use(bodyParser.urlencoded({extended:true})); // esto es para parsear el body & middleware
app.use(bodyParser.json()); //midleware 
var  dbConfig = require('./configs/mongoDB.config.js'), mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
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

