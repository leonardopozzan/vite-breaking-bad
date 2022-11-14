<template>
    <div class="container">
        <nav class="pt-4">
            <SelectComponent />
        </nav>
    </div>
</template>

<script>
import SelectComponent from './SelectComponent.vue';

    export default {
    components: { SelectComponent }
}
</script>

<style lang="scss" scoped>
@use '../assets/mixins' as *;
@use '../assets/variables' as *;

</style>