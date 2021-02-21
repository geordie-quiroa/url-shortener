//'use strict';
//http://localhost:3000/
var express = require('express'), httpVerbs= require('./controllers/httpVerbs'), 
bodyParser = require('body-parser'), app = express(), http = require('http'), controller = require('./controllers/url.controller'),
path = require('path');
app.use(bodyParser.urlencoded({extended:true})); // esto es para parsear el body & middleware
app.use(bodyParser.json()); //midleware
//require('./routes/url.router')(app);
//var controller = require('../controllers/url.controller.js');
//var router = express.Router();
//app.use('/testRouter',  router.get('/testRouter', controller.test));
var port = 80;
//app.use(express.static('./frontend/public/index.html'));
app.use(function (req, res, next) {
  //res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:62856')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'false')
  next()
});
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.

// variables base de datos -------------------------------------------------------------------------------------
var mongoose = require('mongoose'), dev_db = require('./configs/mongoDB.config'),
mongoDB = process.env.MONGODB_URI || dev_db.url;
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect(mongoDB, {
    useNewUrlParser: true
}).then(() => {
    console.log("Conectado a la base de datos...");    
}).catch(err => {
    console.log('Error en conexión a base de datos...', err);
    process.exit();
});

// -------------------------- Rutas y Verbos HTTP para el API-----------------------------------------------------------------
app.post('/api/createUrl', controller.generateTinyUrl);

app.get('/api/urls', controller.getUrls);

app.get('/:shortenKey', controller.getLongUrl);

app.delete('/api/deleteUrl/:shortenKey', controller.deleteUrl);

app.get('/api/urlsTest', controller.getTest); // sin el router y con el controlador

app.get('/api/test', controller.test);

app.get('/api/appTest', (req, res)=>{
    res.send(httpVerbs.getTinyUrl("http://localhost:3000/GNktcm")); // sin router y sin controlador
});
// -------------------------------------------- Termina endpoints del API ----------------------------------------------------------------
app.get("/", (req, res, next)=>{
    res.sendFile('index.html');
    //res.send(httpVerbs.getTinyUrl("frag.me/GNktcm"));
    //res.json({"Message":"Url shortener under construction by Geordie Quiroa..."})
});

app.listen(port, function respond(){
    console.log("App is ready, listening on port " + port);
});

//console.log(httpVerbs.createTinyUrl("http://google.com"));
//console.log(httpVerbs.getTinyUrl("frag.me/GNktcm"));

