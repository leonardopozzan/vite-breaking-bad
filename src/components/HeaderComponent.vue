<template>
    <header class="d-flex align-items-center p-3">
        <div class="img-box"><img src="/img/logo.png" alt="logo"></div>
        <h1 class="text-white">Breaking Bad Api</h1>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/mixins' as *;
@use '../assets/variables' as *;
.img-box{
    width: 150px;
}
</style>