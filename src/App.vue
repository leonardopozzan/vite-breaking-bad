<template>
  <HeaderComponent />
  <NavbarComponent />
  <MainComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

  export default {
    components: { HeaderComponent, NavbarComponent, MainComponent }
}
</script>

<style lang="scss" scoped>
@use './assets/mixins' as *;
@use './assets/variables' as *;
</style>