var Url = require('../models/url.model.js'), httpVerbs = require('./httpVerbs');
var generateTinyUrl = (req, res)=>{
    if (!req.body.longUrl){
        return res.status(400).send({
            success:'false',
            message:"Ingrese un URL..."});
    } else if(req.body.longUrl){
        var _tmpKey= (httpVerbs.createTinyUrl(req.body.longUrl));
        var url2save = new Url({
            url: req.body.longUrl,
            shortenKey:_tmpKey,
            shortenUrl: ("frag.me/"+ _tmpKey),
            visits:0
        });
        url2save.save().then(data => {
            res.status(201).send({dataStored2mongoDb: data, success:'true', message:'created Tiny Url'});
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrio un error al guardar el url en la db."
            });
        });
        //res.status(201).send({success:'true', message:'created tiny Url'});
    }
};
var getUrls = (req, res) => {
    Url.find()
    .then(urls => {
        res.status(200).send(urls);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Hubo un error al recuperar los datos."
        });
    });
};

var getLongUrl = (req, res) => {
    Url.findOne({"shortenKey":req.params.shortenKey})
    .then(URL => {
        if(!URL) {
            return res.status(404).send({
                message: "Url not found with shortenKey>  " + req.params.shortenKey
            });            
        }
        res.send(URL);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Url not found with the shortenKey>  " + req.params.shortenKey
            });                
        }
        return res.status(500).send({
            message: "Error retrieving url with id " + req.params.shortenKey
        });
    });
};


var test = (req,res)=>{
    res.send("El url.controller funciona!");
};
var getTest = (req, res)=>{
    res.send(httpVerbs.getTinyUrl("frag.me/bAf1&cQ"))
};
module.exports.generateTinyUrl = generateTinyUrl, module.exports.getUrls=getUrls, module.exports.getLongUrl = getLongUrl,
module.exports.test = test, module.exports.getTest = getTest;

