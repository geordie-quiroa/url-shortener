var mongoose = require('mongoose'), Schema = mongoose.Schema;

var UrlSchema = new Schema({
    url:{type: String, required: true, max: 100},
    shortenUrl:{type: String, required: true, max: 100},
    //shortenKey:{type: String, required: true, max: 100}, // es el string generado aleatoriamente, no incluye el url base (frag.me/)
    visits:{type: Number, required: true, max: 100}
},{
    timestamps: true
});
module.exports = mongoose.model('Url', UrlSchema);