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
            shortenUrl: ("http://localhost:3000/"+ _tmpKey),
            visits:0
        });
        _tmpKey=0;
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
        //aqui voy a actualizar el URL visits
        if(URL){
            URL.visits += 1
            URL.save(function(err) {
                if (err) return err;
            });
        } else{
            console.log(err);
        }
        //updateVisits(URL);
        res.redirect(307, URL.url);
        //res.status(307).send(URL.url);
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

var deleteUrl = (req, res) => {
    Url.findOneAndDelete({"shortenKey":req.params.shortenKey})
    .then(URL => {
        if(!URL) {
            return res.status(404).send({
                message: "Url not found with shortenKey " + req.params.shortenKey
            });
        };
        res.status(200).send({message: "Url deleted from DB successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Url not found with shortenKey " + req.params.shortenKey
            });                
        }
        return res.status(500).send({
            message: "Could not delete url with shortenKey " + req.params.shortenKey
        });
    });
};


var test = (req,res)=>{
    res.send("El url.controller funciona!");
};
var getTest = (req, res)=>{
    res.send(httpVerbs.getTinyUrl("http://localhost:3000/bAf1&cQ"))
};
module.exports.generateTinyUrl = generateTinyUrl, module.exports.getUrls=getUrls, module.exports.getLongUrl = getLongUrl, module.exports.deleteUrl = deleteUrl,
module.exports.test = test, module.exports.getTest = getTest;

