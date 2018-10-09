<template>
<div id="container" class="container">

<div class="row">

<div class="col-sm-8 offset-sm-2">
<div class="alert alert-warning" v-show="showError" >
<button type="button" class="close" @click="hideMessage()">X</button>
<strong>Error!</strong>
</div>
<h1>Create Url</h1>

<div class="info-form">
<form>
<div class="form-group">
<label for="name">Long Url</label>
<input v-model="inputUrl.url" type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter Url">
<small id="nameHelp" class="form-text text-muted">Enter the url's dir</small>
</div>
</form>

<button class="btn btn-primary" v-if="!this.inputUrl.url" @click="createUrl()" ><span>Create</span>
<button class="btn btn-primary" v-if="this.inputUrl.url" @click="updateUrl()" ><span>Update</span></button>

<button class="btn btn-primary" @click="newUrl()" >New..</button>
</div>
</div>
</div>
</div>
</template>
<script>
import {APIService} from '../APIService';

const apiService = new APIService();

export default {

name: 'CreateUrl',

components: {
},

data() {
    return {
        showError: false,
        url: {}
    };

},

methods: {
createTodo(){
apiService.createUrl(this.inputUrl).then((result)=>{

console.log(result);
if(result.status === 201){
    this.inputUrl = result.data;
}
},(error)=>{

    this.showError = true;

});
},
updateUrl(){
apiService.updateUrl(this.inputUrl).then((result)=>{
    console.log(result);
},(error)=>{
    this.showError = true;
});
},
newTodo(){
    this.inputUrl = {};
}
},

mounted() {
if(this.$route.params.pk){
    apiService.getTodo(this.$route.params.pk).then((todo)=>{
    this.todo = todo;
})
}
},
}
</script>
<style scoped>
.aform{
margin-left: auto;
width: 60%;
}
</style>