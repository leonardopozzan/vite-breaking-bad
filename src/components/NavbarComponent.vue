<template>
    <div class="container">
        <nav class="p-3">
            <form class="row gy-2 gx-3 align-items-center" @submit.prevent="search()">
                <div class="col-auto">
                    <label class="visually-hidden" for="autoSizingInput">Name</label>
                    <input type="text" class="form-control" id="autoSizingInput" placeholder="Name" v-model.trim="store.name">
                </div>
                <div class="col-auto">
                    <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                    <select class="form-select" id="autoSizingSelect" v-model="store.options.params.category">
                        <option value="">Category</option>
                        <option value="Breaking Bad">Breaking Bad</option>
                        <option value="Better Call Saul">Better Call Saul</option>
                    </select>
                </div>
                <div class="col-auto">
                    <label class="visually-hidden">Preference</label>
                    <select class="form-select" v-model="store.status">
                        <option value="">Status</option>
                        <option value="Alive">Alive</option>
                        <option value="Deceased">Deceased</option>
                        <option value="Presumed dead">Presumed dead</option>
                    </select>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-dark" @click="reset()">Reset</button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-dark">Submit</button>
                </div>
            </form>
        </nav>
    </div>
</template>

<script>
import {store} from '../store';
    export default {
    name: 'NavbarComponent',
    data(){
        return {
            store
        }
    },
    methods:{
        search(){
            this.$emit('search');
        },
        reset(){
            store.status = '';
            store.name = '';
            store.options.params.category = '';
            this.search();
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/mixins' as *;
@use '../assets/variables' as *;

</style>