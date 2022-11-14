<template>
    <main>
        <div class="container">
            <NavbarComponent />
        </div>
        <div class="p-4 container bg-light">
            <div class="details" v-html="`Found ${character.length} Characters`"></div>
            <div class="cards">
                <CardComponent v-for="(item,i) in character" :key="item.id" :element="item"  />
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
            axios.get('https://www.breakingbadapi.com/api/characters',this.options).then((res)=>{
                console.log(res.data)
                this.character = [...res.data];
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
}

</style>