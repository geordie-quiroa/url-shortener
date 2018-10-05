var baseURL="frag.me/", chars= "0123456789abcdefghiklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ&-", charsAvailable= chars.length;
var tmpJson = [
    {
    "longUrl":"https://www.github.com/watch?v=LoVoqVqzMyQ",
    "tinyUrl":"frag.me/GNktcm",
    "visits":0
    }, {
    "longUrl":"https://webapplog.com/url-parameters-and-routing-in-express-js/",
    "tinyUrl":"frag.me/GNktcm",
    "visits":0
    }
  ];

var createTinyUrl = (urlInput)=>{
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
var getTinyUrl = (jsonSource, tinyUrl)=>{

};

tmp = {};
tmp.longUrl = "https://www.w3schools.com/jsref/jsref_push.asp";
tmp.tinyUrl = createTinyUrl("https://www.w3schools.com/jsref/jsref_push.asp");
tmp.visits = 0;
tmpJson.push(tmp);
function leerJSON(json){
    var i;
    for (i=0; i<json.length; i++){
    console.log("long Url: "+ json[i].longUrl+" - tiny Url: "+ json[i].tinyUrl);
    }
  }
  leerJSON(tmpJson);
module.exports.createTinyUrl = createTinyUrl;
//console.log(createTinyUrl("https://www.github.com/watch?v=LoVoqVqzMyQ"));
// 3 rutas> post, get, delete 
//Vue JS