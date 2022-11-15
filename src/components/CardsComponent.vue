<template>
    <div class="cards">
        <CardComponent v-for="(item,i) in store.characters" :key="item.char_id" :element="item" />
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import {store} from '../store';
    export default {
        data(){
            return{
                store
            }
        },
        components:{CardComponent},
    }
</script>

<style lang="scss" scoped>
@use '../assets/mixins' as *;
@use '../assets/variables' as *;
.cards{
        display: flex;
        flex-wrap: wrap;
    }
</style>