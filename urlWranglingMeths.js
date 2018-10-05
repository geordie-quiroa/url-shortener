var baseURL= "frag.me/"
var chars = "0123456789abcdefghiklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ&-";
var charsAvailable= chars.length;
var createTinyUrl = function (urlInput){
    //if (err) return console.error(err);
    var lar = urlInput.length;
    var idx = Math.ceil((lar/4));
    var shortenDir = '';
    for (var char = 0; char<=idx;char++){
        var randPos = Math.floor(Math.random()*charsAvailable);
        shortenDir+= chars.substring(randPos, randPos+1);
        shortenDir=shortenDir
    };
    return baseURL+shortenDir;
};
module.exports.createTinyUrl = createTinyUrl;
//console.log(createTinyUrl("https://www.github.com/watch?v=LoVoqVqzMyQ"));
// 3 rutas> post, get, delete 
//Vue JS