<img src="images/icon.png" align="right" />

# url-shortener

Desarrollo en node js que consume un restfulAPI para acortar URL´s realizando requests a una base de datos Mongo.

![](images/url-shortener.gif)

### Backend
**Utiliza**:
* [NodeJS](https://github.com/nodejs/node)
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
### Frontend
**Utiliza**:
* [Html](https://developer.mozilla.org/es/docs/Web/HTML)
* [Js](https://www.javascript.com/)
* [VueJs](https://www.npmjs.com/package/vue)
* [Axios](https://www.npmjs.com/package/axios)

### Requerimientos para empezar
Tener disponible en máquina:
   - Node JS
   - NPM

## Start url-shortener en máquina local
1. Descargar el .zip del release tag v1.1.0

2. Si se va a utilizar otra dirección ip distinta a localhost, sustituir las líneas de código que utilizan
localhost en los siguientes archivos, de lo contrario, saltar este paso:

* `controllers/url.controller.js`
* `views/js/frontEndApp.js`
* `views/js/frontEndApp.js`
* `views/js/script.js`

3. Ingresar al directorio descompreso y correr los demás comandos:
```bash
$ cd ./url-shortener-1.1.0
$ npm install
$ node ./app.js
```

4. Visitar localhost en puerto 3000 
* [localhost](http://localhost:3000/)

## Authors

* **Geordie Quiroa** - [Geordie](https://github.com/geordie-quiroa)

## License

This project is licensed under the GNU3.0 License - see the [LICENSE](LICENSE) file for details

