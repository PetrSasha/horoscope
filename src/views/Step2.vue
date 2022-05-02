<template>
    <div class="step1">
        <Header/>
    <!-- progress line -->
        <div class="line-wrapp">
            <div class="line line--step2">
            </div>
        </div>
    <div class="wrapp">
         <div class="container">
            <div class="title-block">
                <h3 class="title">Подскажите, мучает ли Вас бессонница последнее время?</h3>
            </div>
            <form  class="input-progress">
                <div v-on:click="showBtn = !showBtn" class="choice-item">
                    <input  type="radio" id="choice" name="morning" value="Утро">
                    <label for="choice">Да</label>
                </div>
                <div v-on:click="showBtn = !showBtn" class="choice-item">
                    <input  type="radio" id="choice1" name="evening" value="Вечер">
                    <label for="choice1">Нет</label>
                </div>
                <div v-on:click="showBtn = !showBtn" class="choice-item">
                    <input  type="radio" id="choice2" name="day" value="День">
                    <label for="choice2">Иногда</label>
                </div>
            </form>
            <div v-if="showBtn" id="hideBtn" class="btn-wrapp">
                <router-link to="/step3"> 
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
        ChooseBlock,Header,ProgressLine,Footer
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
        &--step2{
            width:30%;
        }
    }
</style>