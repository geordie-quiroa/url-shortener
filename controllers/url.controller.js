var Url = require('../models/url.model.js'), httpVerbs = require('./httpVerbs');
var test = (req,res)=>{
    res.send("El url.controller funciona!");
};
var getTest = (req, res)=>{
    res.send(httpVerbs.getTinyUrl("frag.me/bAf1&cQ"))
};
module.exports.test = test;
module.exports.getTest = getTest;
