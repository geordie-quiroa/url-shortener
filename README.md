<img src="images/icon.png" align="right" />

# url-shortener

[![geordie-quiroa](https://circleci.com/gh/geordie-quiroa/url-shortener/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/geordie-quiroa/url-shortener)

Desarrollo en node js que consume un restfulAPI para acortar URL´s realizando requests a una base de datos Mongo.

![](images/url-shortener.gif)

### Kubernetes deployment - Udacity Capstone project
For creating my app container and deploying the container's image to a Kubernetes cluster in EKS, I created the Dockerfile in the current repository, built and pushed the image to my Dockerhub repository through the CircleCI pipeline, and also used Cloudformation; specifically, I used the CircleCI aws-eks Orb; which uses cloudformation as its backbone to deploy an EKS cluster stack in AWS. After the cluster stack was formated, I ran the following commands using aws cli through CircleCI cluster deployment job:
* Configure CircleCI kubectl to connect to my AWS EKS cluster using aws-eks Orb command: `update-kubeconfig-with-authenticator`
* Add my Dockerhub credentials secrets to the EKS cluster so I can pull my app image: `kubectl create secret docker-registry docker-secret --docker-server="https://index.docker.io/v1/" --docker-username="$DOCKER_USER" --docker-password="$DOCKER_PASSWORD" --docker-email="gquiroa@ufm.edu"`
* Create K8s application service in new cluster using my service configuration file at aws/ directory: `kubectl apply -f aws/k8-app-service.yml`
* Create a K8s deployment using my deployment configuration file at aws/ directory where I define how many replicas to deploy using my docker image from my dockerhub repo: `kubectl apply -f aws/k8-app-deployment.yml`
* Once the deployment is created at my EKS cluster, I expose my application through an AWS Load Balancer: `kubectl expose deployment url-shortener-deployment --type=LoadBalancer --name=url-shortener-service` which DNS will become the new origin in the Blue Green deployment strategy in my pipeline.

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
   - Node JS 12.4.1
   - NPM

## Start url-shortener en máquina local
1. Descargar el .zip del release tag v1.1.0

2. Si se va a utilizar otra dirección ip distinta a localhost, sustituir las líneas de código que utilizan
localhost en los siguientes archivos, de lo contrario, saltar este paso:

* `controllers/url.controller.js`
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

