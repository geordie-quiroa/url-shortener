var Url = require('../models/url.model.js'), httpVerbs = require('./httpVerbs');

var generateTinyUrl = (req, res)=>{
    
    var url2save = new Url({
        url: req.body.longUrl,
        shortenUrl: (httpVerbs.createTinyUrl(req.body.longUrl)),
        visits:0
    });
    if (!req.body.longUrl){
        return res.status(400).send({
            success:'false',
            message:"Ingrese un URL..."});
    } else if(req.body.longUrl){
        return res.status(201).send({succes:'true', message:'created tiny Url'});
    }
    url2save.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio un error al guardar el url en la db."
        });
    });
};
var test = (req,res)=>{
    res.send("El url.controller funciona!");
};
var getTest = (req, res)=>{
    res.send(httpVerbs.getTinyUrl("frag.me/bAf1&cQ"))
};
module.exports.generateTinyUrl = generateTinyUrl, module.exports.test = test, module.exports.getTest = getTest;

