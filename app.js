var express = require('express'), httpVerbs= require('./controllers/httpVerbs'), 
bodyParser = require('body-parser'), app = express(), http = require('http'), controller = require('./controllers/url.controller');
app.use(bodyParser.urlencoded({extended:true})); // esto es para parsear el body & middleware
app.use(bodyParser.json()); //midleware
//require('./routes/url.router')(app);
//var controller = require('../controllers/url.controller.js');
//var router = express.Router();
//app.use('/testRouter',  router.get('/testRouter', controller.test));
var port = 3000;
//app.use(express.static('./frontend/public/index.html'));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://frag.me:' + port)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
});
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

app.get('/api/getUrl/:shortenKey', controller.getLongUrl);

app.get('/:shortenKey', controller.getLongUrl);

app.delete('/api/deleteUrl/:shortenKey', controller.deleteUrl);

app.get('/api/urlsTest', controller.getTest); // sin el router y con el controlador

app.get('/api/test', controller.test);

app.get('/api/appTest', (req, res)=>{
    res.send(httpVerbs.getTinyUrl("frag.me/GNktcm")); // sin router y sin controlador
});
// -------------------------------------------- Termina endpoints del API ----------------------------------------------------------------
app.get("/", (req, res, next)=>{
    //res.sendFile('./frontend/public/index.html');
    //res.send(httpVerbs.getTinyUrl("frag.me/GNktcm"));
    res.json({"Message":"Url shortener under construction by Geordie Quiroa..."})
});

app.get("/api/getUrls"), (req, res)=>{
    res.status(200).send(controller.getTest(tinyUrl="frag.me/GNkcm"));
};

app.post("/apr/shorten", (req, res)=>{
    res.json({url: "https://spring.io/nodeJSdeveloping/REST"});
    res.sendStatus(201).send("Todo esta bien.");
});

app.listen(port, function respond(){
    console.log("ready!");
});

//console.log(httpVerbs.createTinyUrl("http://google.com"));
//console.log(httpVerbs.getTinyUrl("frag.me/GNktcm"));

