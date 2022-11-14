<template>
    <div class="my-card">
        <div class="img-box">
            <img :src="element.img">
        </div>
        <div class="name">{{element.name}}</div>
        <div>{{element.category}}</div>
        <div>{{element.status}}</div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            element: Object
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/mixins' as *;
@use '../assets/variables' as *;

.my-card{
    width: calc(100% /5 - 1rem);
    background-color: $bb-background;
    padding: 0.5rem;
    margin: 0.5rem;
    .img-box{
        height: 250px;
        overflow: hidden;
    }
}
</style>