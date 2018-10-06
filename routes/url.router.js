//var express = require('express'), router = express.Router()
module.exports = (app)=>{
    var controller = require('../controllers/url.controller.js');

    app.post('/api/createTiny', controller.getTest);

    app.get('/api/getUrl', controller.getTest);
    app.get('/api/anotherTest', controller.test);
}