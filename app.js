var express = require('express'), httpVerbs= require('./controllers/httpVerbs'), 
bodyParser = require('body-parser'), app = express(), http = require('http'), controller = require('./controllers/url.controller');
app.use(bodyParser.urlencoded({extended:true})); // esto es para parsear el body & middleware
app.use(bodyParser.json()); //midleware
//require('./routes/url.router')(app);
//var controller = require('../controllers/url.controller.js');
//var router = express.Router();
//app.use('/testRouter',  router.get('/testRouter', controller.test));
app.use(express.static('./public'));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
});

var mongoose = require('mongoose'), dev_db = require('./configs/mongoDB.config'),
mongoDB = process.env.MONGODB_URI || dev_db.url;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, {
    useNewUrlParser: true
}).then(() => {
    console.log("Conectado a la base de datos...");    
}).catch(err => {
    console.log('Error en conexión a base de datos...', err);
    process.exit();
});

// -------------------------- Rutas y Verbos HTTP -----------------------------------------------------------------
app.post('/api/createUrl', controller.generateTinyUrl);

app.get('/api/urls', controller.getUrls);

app.get('/api/getUrl/:shortenKey', controller.getLongUrl);

app.delete('/api/deleteUrl/:shortenKey', controller.deleteUrl);

app.get('/api/urlsTest', controller.getTest); // sin el router y con el controlador

app.get('/api/test', controller.test);

app.get('/api/appTest', (req, res)=>{
    res.send(httpVerbs.getTinyUrl("frag.me/GNktcm")); // sin router y sin controlador
});

app.get("/", (req, res, next)=>{
    res.sendfile('./public/index.html');
    //res.send(httpVerbs.getTinyUrl("frag.me/GNktcm"));
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

