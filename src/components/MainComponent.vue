<template>
    <main>
        <div class="container">
            <NavbarComponent />
        </div>
        <div class="p-4 container bg-light">
            <div class="details" v-html="`Found ${character.length} Characters`"></div>
            <div class="cards" v-if="!loading">
                <CardComponent v-for="(item,i) in character" :key="item.id" :element="item" />
            </div>
            <div class="loading-animation" v-if="loading">
                <span class="text">Loading</span>
                <span><i class="fa-solid fa-gear loading-big cog"></i></span>
                <span><i class="fa-solid fa-gear loading-small cog"></i></span>
            </div>
        </div>
    </main>
</template>

<script>
import CardComponent from './CardComponent.vue';
import NavbarComponent from './NavbarComponent.vue';
import axios from 'axios';

    export default {
    name: 'MainComponent',
    components: { CardComponent, NavbarComponent },
    data(){
        return{
            character: [],
            loading: false,
            options: {
                params:{
                    category : 'Breaking Bad',
                    limit : 10
                }
            }
        }
    },
    methods:{
        getApi(){
            this.loading = true
            axios.get('https://www.breakingbadapi.com/api/characters',this.options).then((res)=>{
                console.log(res.data);
                setTimeout(()=>{
                    this.loading = false;
                    this.character = [...res.data];
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
    .cards{
        display: flex;
        flex-wrap: wrap;
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