<template>
    <div class="container">
        <div class="title-block">
            <h3 class="title">Укажите свой пол:</h3>
        </div>
        <form  class="input-block">
            <div>
                <input v-on:click="showBtn = !showBtn" type="radio" id="femaleChoice" name="female" value="Женщина">
                <label for="femaleChoice">Женщина</label>
            </div>
             <div>
                <input v-on:click="showBtn = !showBtn" type="radio" id="maleChoice" name="male" value="Мужчина">
                <label for="maleChoice">Мужчина</label>
            </div>
        </form>
        <div v-if="showBtn" id="hideBtn" class="btn-wrapp">
            <router-link to="/step1"> 
                    <button class="btn"> далее</button>
                </router-link>
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
    data() {
        el: '#hideBtn'
        return {
            showBtn: false
        }
        
    },
     components: {
        Footer
    }
};

</script>
<style lang="scss">
 .title-block {
    display: flex;
    text-align: center;
    justify-content: center;
    height: 10vh;
    padding: 5px 20px;
    background: #343B4D;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
 }
 .title {
    color: #FFFFFF;
    margin: auto;
    font-size: 1rem;
    
 }
 .input-block {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    background: #F3F4F8;
 }
 input {
    margin-right: 10px;
    outline: none;
    padding:10px;
    border: 1px solid #dbdce3 ;
 }
  .btn-wrapp{
        display: flex;
        justify-content: center;
        margin-top: 15%;
        margin-bottom: 30%;
    }
    .btn {
        width: 186px;
        height: 45px;
        background: #315DFA;
        color: #FFFF;
        text-transform: uppercase;
        outline: none;
        border: none;
    }
    a{
        text-decoration: none;
        color: #FFFF;
    }
    .input-progress {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 40vh;
        background: #F3F4F8;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        
    }
    @media (min-width: 1000px){
       .btn-wrapp{
           margin-top: 10%;
       }
    }
</style>