<template>
    <main>
        <div class="container">
            <NavbarComponent @search="getApi()" />
        </div>
        <div class="p-4 container bg-light">
            <div class="details" :class="{'loading-text' : store.loading}" v-html="store.loading ? `` :`Found ${store.characters.length} Characters`"></div>
            <CardsComponent  v-if="!store.loading" />
            <div class="loading-animation" v-if="store.loading">
                <span class="text">Loading</span>
                <span><i class="fa-solid fa-gear loading-big cog"></i></span>
                <span><i class="fa-solid fa-gear loading-small cog"></i></span>
            </div>
            <div v-if="store.characters.length == 0 && !store.loading">
                <h1 class="text-center pt-3">Ops! non ho trovato nessun elemento</h1>
            </div>
        </div>
    </main>
</template>

<script>
import CardsComponent from './CardsComponent.vue';
import NavbarComponent from './NavbarComponent.vue';
import axios from 'axios';
import {store} from '../store';

export default {
    name: 'MainComponent',
    components: { CardsComponent, NavbarComponent },
    data(){
        return{
            store,
            imgNotFounded:[14,17,39]
        }
    },
    computed:{
        charactersFiltered(){
            return store.characters.filter((el)=> {
                return !this.imgNotFounded.includes(el.char_id) && el.name.includes(store.name) && el.status.includes(store.status)
            });
        }
    },
    methods:{
        getApi(){
            store.loading = true;
            let options = null;
            if(store.options.params.category){
                options = {...store.options};
            }
            //filtro i personaggi anche per nome e stato
            const status = store.status;
            const name = store.name;
            axios.get('https://www.breakingbadapi.com/api/characters',store.options).then((res)=>{
                console.log(res.data);
                setTimeout(()=>{
                    store.loading = false;
                    store.characters = res.data.filter((el)=> {
                    return !this.imgNotFounded.includes(el.char_id) && el.name.includes(name) && el.status.includes(status)
                });

                },2000);
            })
        }
    },
    created(){
        this.getApi();
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/mixins' as *;
@use '../assets/variables' as *;

main{
    .details{
        background-color: $bb-details;
        font-size: 1.1rem;
        font-weight: bold;
        color: white;
        padding: 0.5rem;
    }
    .loading-text::before{
        content: 'Loading';
    }
    .loading-animation {
        display: flex;
        justify-content: center;
        padding-top: 3rem;
        .circle i{
            font-size: 130px;
            animation: rotation 15s linear infinite;
        }
        .cog {
            animation-name: loading-spin;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
        .loading-big {
            font-size: 150px;
            margin-bottom: 15px;
            animation-duration: 3s;
        }
        .loading-small {
            font-size: 80px;
            align-self: flex-end;
            margin-left: -10px;
            animation-duration: 2s;
            animation-direction: reverse;
        }
        .text{
            font-size: 3rem;
            font-weight: bold;
            align-self: center;
            margin-right: 2rem;
        }
    }
    @keyframes rotation {
        from{transform: rotate(0deg);}
        to{transform: rotate(3600deg);}
    }
    @keyframes loading-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
}
</style>