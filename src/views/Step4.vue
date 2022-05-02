<template>
    <div class="step1">
      <Header/>
    <!-- progress line -->
    <div class="line-wrapp">    
            <div class="line line--step4">
            </div>
        </div>
    <div class="wrapp">
         <div class="container">
            <div class="title-block">
                <h3 class="title">Какой Вы видите свою жизнь через 5 лет?</h3>
            </div>
            <form  class="input-progress">
                <div v-on:click="showBtn = !showBtn" class="choice-item">
                    <input  type="radio" id="morningChoice" name="morning" value="Утро">
                    <label for="morningChoice">Брак, семья, дети, дом</label>
                </div>
                <div v-on:click="showBtn = !showBtn" class="choice-item">
                    <input  type="radio" id="Choice" name="evening" value="Вечер">
                    <label for="eveningChoice">Путешествия по Миру</label>
                </div>
                <div v-on:click="showBtn = !showBtn" class="choice-item">
                    <input  type="radio" id="dayChoice" name="day" value="День">
                    <label for="dayChoice">Успешная карьера </label>
                </div>
                <div v-on:click="showBtn = !showBtn"  class="choice-item">
                    <input  type="radio" id="nightChoice" name="night" value="Ночь">
                    <label for="nightChoice">Всё вместе</label>
                </div>
            </form>
            <div v-if="showBtn" id="hideBtn" class="btn-wrapp">
                 <router-link to="/step5"> 
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
    .line{
        &--step4{
            width:70%;
        }
    }
    
</style>