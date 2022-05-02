<template>
    <div class="step1">
        <Header/>
          <div class="line-wrapp">
            <div class="line">
            </div>
        </div>
    <div class="wrapp">
         <div class="container">
            <div class="title-block">
                <h3 class="title">В какое время суток Вы чувствуете себя наиболее комфортно?</h3>
            </div>
            <form  class="input-progress">
                <div v-on:click="showBtn = !showBtn" class="choice-item">
                    <input  type="radio" id="morningChoice" name="morning" value="Утро">
                    <label for="morningChoice">Утро</label>
                </div>
                <div v-on:click="showBtn = !showBtn" class="choice-item">
                    <input  type="radio" id="eveningChoice" name="evening" value="Вечер">
                    <label for="eveningChoice">Вечер</label>
                </div>
                <div v-on:click="showBtn = !showBtn" class="choice-item">
                    <input  type="radio" id="dayChoice" name="day" value="День">
                    <label for="dayChoice">День</label>
                </div>
                <div v-on:click="showBtn = !showBtn"  class="choice-item">
                    <input  type="radio" id="nightChoice" name="night" value="Ночь">
                    <label for="nightChoice">Ночь</label>
                </div>
            </form>
            <div v-if="showBtn" id="hideBtn" class="btn-wrapp">
                <router-link to="/step2"> 
                    <button class="btn"> далее</button>
                </router-link>
                <router-view/>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import ChooseBlock from '@/components/ChooseBlock.vue'
import ProgressLine from '@/components/ProgressLine.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
        ChooseBlock,Header,Footer
    },
    data() {
        el: '#hideBtn'
        return {
            showBtn: false
        }
    }
}
</script>
<style lang="scss">
    .wrapp {
        margin: 15px 20px;
    }
    
    .choice-item {
        width: 50%;
        height: 6vh;
        display: flex;
        align-items: center;
    }
    a {
        text-decoration: none;
        color: #F3F4F8;
        text-transform: uppercase;
    }
    .input-progress {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 40vh;
        background: #F3F4F8;
        &--input{
            align-items: center;
        }
    }
    .line-wrapp{
        height: 2vh;
        margin: 20px 10px;
        border-radius: 5px;
        box-shadow: inset 1px 1px 7px 1px #cccccc75;
    }
    .line{
        height: 2vh;
        background: #B53E42;
        border-radius: 5px;
        width:15%
    }
    @media (min-width: 1000px){
        
       .wrapp{
           max-width: 50%;
           margin: 20px auto;
       }
       
       .info{
           margin: 0;
           height: 20vh;
       }
       .container {
           width: 100%;
       }
    }
</style>