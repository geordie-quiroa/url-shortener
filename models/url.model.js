var mongoose = require('mongoose'), Schema = mongoose.Schema;

var UrlSchema = new Schema({
    url:{type: String, required: true, max: 100},
    shortenUrl:{type: String, required: true, max: 100},
    shortenKey:{type: String, required: true, max: 100}, // es el string generado aleatoriamente, no incluye el url base (frag.me/)
    visits:{type: Number, required: true, max: 1000},
    expire_at:{type: Date, default: Date.now, expires: 200}// 200 segundos listo 12 horas expiran / 200 60*60*24*0.5 , expires: 119, , default: Date.now() 
}, {timestamps: true});
module.exports = mongoose.model('Url', UrlSchema);
