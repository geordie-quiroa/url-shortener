// ----------------------------- Todo lo comentado era util cuando la db del API era local, CONSUME RAM ----------------------------------------------------------

var chars= "0123456789abcdefghiklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ&-", charsAvailable= chars.length; // baseUrl="http://frag.me:3000/";
/*var tmpJson = [
    {
    "shortenKey": "bAf1&cQ",
    "longUrl":"https://www.github.com/watch?v=LoVoqVqzMyQ",
    "tinyUrl":"frag.me/bAf1&cQ",
    "visits":0
    }, {
    "shortenKey":"GNktcm",
    "longUrl":"https://webapplog.com/url-parameters-and-routing-in-express-js/",
    "tinyUrl":"frag.me/GNktcm",
    "visits":0
    }
  ];
var insert2db = (url, short, key)=>{
    var tmp = {};
    tmp.shortenKey = key;
    tmp.longUrl = url;
    tmp.tinyUrl = short;
    tmp.visits = 0;
    tmpJson.push(tmp);
};

var getTinyUrl = (tinyUrl2search)=>{
    var i=0;
    var n=0;
    while(n!=1 && i<tmpJson.length){
        if (tmpJson[i].tinyUrl == tinyUrl2search){
            n=1;
            return tmpJson[i].longUrl;
        };
        i++
    if (n!=0){
        return "Value Not Found!";
        };
    };
    //for (i=0; i<=tmpJson.length; i++){
        //if (tmpJson[i].tinyUrl == tinyUrl2search){
            //n=1;
            //return tmpJson[i].longUrl;
        //};
    //};
};
*/
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
    if (shortenDir.length >7){
        shortenDir = shortenDir.substring(0,7);
    };
    //var shortenUrl = (baseUrl+shortenDir).toString();
    //insert2db(urlInput,shortenUrl, shortenDir);
    return shortenDir;
};
/*
var deleteUrl=(tinyUrl2delete)=>{ 
    var i=0;
    var n=0;
    while(n!=1 && i<tmpJson.length){
        if (tmpJson[i].tinyUrl == tinyUrl2delete){
            n=1;
            delete tmpJson[i];
        };
        i++
    if (n==0){
        return "Value Not Found!";
        };
    };
};

function leerJSON(json){
    var i;
    for (i=0; i<json.length; i++){
    console.log("long Url: "+ json[i].longUrl+" - tiny Url: "+ json[i].tinyUrl);
    }
  };
  */


module.exports.createTinyUrl = createTinyUrl;

//module.exports.getTinyUrl = getTinyUrl;
//module.exports.urls = tmpJson;
//module.exports.deleteUrl = deleteUrl;
if (require.main === module) {
    var prueba = createTinyUrl("https://www.github.com/");
    var prueba2 = createTinyUrl("https://www.geordiequiroa.co/");
    console.log(prueba2);
    leerJSON(tmpJson);
    longUrl = getTinyUrl(prueba2);
    console.log(longUrl);
};
// 3 rutas> post, get, delete 
//Vue JS