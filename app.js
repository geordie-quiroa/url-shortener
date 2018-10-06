var express = require('express'), httpVerbs= require('./controllers/httpVerbs'), 
bodyParser = require('body-parser'), app = express(), http = require('http'), controller = require('./controllers/url.controller');
app.use(bodyParser.urlencoded({extended:true})); // esto es para parsear el body & middleware
app.use(bodyParser.json()); //midleware
//require('./routes/url.router')(app);
//var controller = require('../controllers/url.controller.js');
//var router = express.Router();
//app.use('/testRouter',  router.get('/testRouter', controller.test));

app.get('/api/controllerGetUrl', controller.getTest); // sin el router y con el controlador
app.get('/api/test', controller.test);
app.get('/api/appTest', (req, res)=>{
    res.send(httpVerbs.getTinyUrl("frag.me/GNktcm")); // sin router y sin controlador
});
app.get("/", (req, res)=>{
    res.send(httpVerbs.getTinyUrl("frag.me/GNktcm"));
    //res.json({"Message":"Url shortener under construction..."})
});
app.get("/api/getUrls"), (req, res)=>{
    res.status(200).send(controller.getTest(tinyUrl="frag.me/GNkcm"));
};
app.post("/apr/shorten", (req, res)=>{
    res.json({url: "https://spring.io/nodeJSdeveloping/REST"});
    res.sendStatus(201).send("Todo esta bien.");
});

app.listen(3000, function respond(){
    console.log("ready!");
});

//console.log(httpVerbs.createTinyUrl("http://google.com"));
//console.log(httpVerbs.getTinyUrl("frag.me/GNktcm"));

