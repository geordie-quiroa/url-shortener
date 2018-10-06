var Url = require('../models/url.model.js'), httpVerbs = require('./httpVerbs');
var test = (req,res)=>{
    res.send("El url.controller funciona!");
};
module.exports.test = test;
var getTest = (req, res)=>{
    res.send(httpVerbs.getTinyUrl("frag.me/bAf1&cQ"))
};
module.exports.getTest = getTest;
