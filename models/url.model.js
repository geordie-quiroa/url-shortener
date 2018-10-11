var mongoose = require('mongoose'), Schema = mongoose.Schema;

var UrlSchema = new Schema({
    url:{type: String, required: true, max: 100},
    shortenUrl:{type: String, required: true, max: 100},
    shortenKey:{type: String, required: true, max: 100}, // es el string generado aleatoriamente, no incluye el url base (frag.me/)
    visits:{type: Number, required: true, max: 100},
    createdAt: {type: Date, default: Date.now, expires: 60*60*24*0.5} //12 horas expiran / 200 
});
module.exports = mongoose.model('Url', UrlSchema);