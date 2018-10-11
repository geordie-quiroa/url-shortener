
var createUrl2Api = function(){
    document.getElementById("search").onkeypress = function(event){
        if (event.keyCode == 13 || event.which == 13){
            //alert("Llego aqui");
            event.preventDefault();
            var inputUrl = document.getElementById("search").value, urlApi = "http://frag.me:3000/api/createUrl", _tmpUrl = {},
            data2send = {
                longUrl:inputUrl
            };
            //alert(inputUrl);
            //postUrl2Api(document.getElementById("search").value);
            fetch(urlApi, {
                method:'POST',
                body: JSON.stringify(data2send),
                headers:{
                    'Content-Type': 'application/json'
                  }
            }).then((res)=>res.json())
            .then((data)=> {
                console.log(data);
                _tmpUrl.info = data.dataStored2mongoDb;
                console.log(_tmpUrl.info.shortenUrl);
                document.getElementById("search").value = _tmpUrl.info.shortenUrl;
                document.getElementById("link").innerHTML = "<i class='fas fa-link'></i> "+(_tmpUrl.info.shortenUrl).toString();
                document.getElementById("link1").innerHTML = "l";
                _tmpUrl.info.shortenUrl = document.getElementById("link").setAttribute("href",_tmpUrl.info.shortenUrl);
                document.getElementById("leyenda").innerHTML= "<i id='chequesin' class='far fa-check-circle'></i> Tu <a id='fragme'>frag.me</a>  est&aacute; listo!"
                setTimeout("location.reload(true);",7000); // Se refresca cada 7 segundos
            })
            .catch((err)=> console.log(err))
        }
    };
}

function refreshNow() {
	setTimeout("location.reload(true);",500);
};

var postUrl2Api = ()=>{
    var urlApi = "http://frag.me:3000/api/createUrl";
    var data2send = {
        longUrl:document.getElementById("search").value
    };
    axios.post(urlApi, data2send);
};

function postData(event){
    event.preventDefault();

    let tittle = document.getElementById('tittle').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers : new Headers(),
        body:JSON.stringify({tittle:tittle, body:body})
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
}