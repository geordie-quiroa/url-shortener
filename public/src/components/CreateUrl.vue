<template>
    <div>
        <h2>Crear frag.me url</h2>
        <form @submit.prevent>
            <div class="form-group">
                <input type="text" class="form-control" @keypress="typing=true" placeholder="Ingresar url largo" v-model="urlLargo" @keyup.enter="addUrl($event)">
                <span class="help-block small text-center" v-show="typing">Hit enter to register url</span>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    import bus from './../bus.js';

    export default {
        data(){
            return {
                urlLargo:'',
                typing: false,
            }
        },
        methods: {
            addUrl(event){
                if (event) event.preventDefault();
                var url = 'http://localhost:4000/api/createUrl';
                var param = {
                    urlLargo: this.urlLargo
                };
                axios.post(url, param).then((res)=>{
                    console.log(res);
                    this.clearUrl();
                    this.refreshUrl();
                    this.typing = false;
                }).catch((err)=>{
                    console.log(err);
                })
            },
            clearUrl(){
                this.urlLargo = '';
            },
            refreshUrl(){
                bus.$emit('refreshUrl')
            }
        }
    }
    </script>