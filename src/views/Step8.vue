<template lang="">
    <div>
        <Header/>
         <ul v-for="(p, value, index) of people" :key="index" class="json-response">
            <li class="json-item">
                <p>{{value}}:</p>
                <p>{{p}}</p>
            </li>
        </ul> 
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    components:{
        Header
    },
    data() {
        return{
            people: []
        }
                
    },
    mounted(){
        const axios = require('axios').default;
        return(
            axios
            .get('https://swapi.dev/api/people/1/')
            .then(response => this.people = response.data)
        )
    }
}
</script>
<style >
    
</style>