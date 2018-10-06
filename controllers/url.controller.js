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
            res.status(201).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrio un error al guardar el url en la db."
            });
        });
        //res.status(201).send({succes:'true', message:'created tiny Url'});
    }
};
var test = (req,res)=>{
    res.send("El url.controller funciona!");
};
var getTest = (req, res)=>{
    res.send(httpVerbs.getTinyUrl("frag.me/bAf1&cQ"))
};
module.exports.generateTinyUrl = generateTinyUrl, module.exports.test = test, module.exports.getTest = getTest;

