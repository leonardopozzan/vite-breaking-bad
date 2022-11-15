import {reactive} from 'vue';

export const store = reactive({
    characters: [],
    loading: false,
    options: {
        params:{
            category : ''
        }
    },
    status: '',
    name: ''
})