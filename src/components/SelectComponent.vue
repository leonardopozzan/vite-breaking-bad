<template>
    <select name="category">
        <option value="1">Breaking Bad</option>
        <option value="2">Better Call Saul</option>
    </select>s
</template>

<script>
    export default {
        
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