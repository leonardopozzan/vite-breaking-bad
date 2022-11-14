<template>
    <div class="container">
        <nav class="p-3">
            <select name="category">
                <option value="Breaking Bad">Breaking Bad</option>
                <option value="Better Call Saul">Better Call Saul</option>
            </select>
        </nav>
    </div>
</template>

<script>

    export default {
    name: 'NavbarComponent',
}
</script>

<style lang="scss" scoped>
@use '../assets/mixins' as *;
@use '../assets/variables' as *;
select{
    padding: 0.3rem 1rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background-color: black;
    color: white;
    border: 0;
}
</style>