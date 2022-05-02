<template>
    <div class="step1">
      <Header/>
    <!-- progress line -->
        <div class="line-wrapp">    
            <div class="line line--step3">
            </div>
        </div>
    <div class="wrapp">
         <div class="container">
            <div class="title-block">
                <h3 class="title">Чувствуете ли Вы в последнее время, что вам никак не удается осуществить ваши планы?</h3>
            </div>
            <form  class="input-progress">
                <div v-on:click="showBtn = !showBtn" class="choice-item">
                    <input  type="radio" id="morningChoice" name="morning" value="Утро">
                    <label for="morningChoice">Да</label>
                </div>
                <div v-on:click="showBtn = !showBtn" class="choice-item">
                    <input  type="radio" id="Choice" name="evening" value="Вечер">
                    <label for="eveningChoice">Нет</label>
                </div>
                <div v-on:click="showBtn = !showBtn" class="choice-item">
                    <input  type="radio" id="dayChoice" name="day" value="День">
                    <label for="dayChoice">Иногда</label>
                </div>
            </form>
            <div v-if="showBtn" id="hideBtn" class="btn-wrapp">
                 <router-link to="/step4"> 
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
        &--step3{
            width:45%;
        }
    }
    
</style>