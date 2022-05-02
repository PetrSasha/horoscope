
<template>
    <div class="step2">
      <Header/>
    <!-- progress line -->
    <div class="line-wrapp">    
            <div class="line line--step5">
            </div>
        </div>
    <div class="wrapp">
         <div class="container">
            <div class="title-block">
                <h3 class="title">Введите дату своего рождения:</h3>
            </div>
            <form  class="input-progress input">
                <p></p>
                <div  class="choice-item choice-item--input"> 
                    <select id="day" v-model="day">
                        <label for="day">day</label>
                        <option v-for="(day, index) in days" :value="day.value" :key="index">
                            {{day.label}}
                        </option>
                    </select>
                </div>
                <div  class="choice-item choice-item--input">
                    <select id="month"  v-model="month">
                        <label for="month"></label>
                        <option v-for="(month, index) in months" :value="month.value" :key="index">
                            {{month.label}}
                        </option>
                    </select>
                </div>
                <div v-on:click="showBtn = !showBtn" class="choice-item choice-item--input">
                    <select id="year"  v-model="year">
                        <label for="year"></label>
                        <option v-for="(year, index) in years" :value="year.value" :key="index">
                            {{year.label}}
                        </option>
                    </select>
                
                </div>
                <div v-if="NoValidate" class="error">Пожалуйста, выберите ответ</div>
                <div v-if="validate"> 
                    <img class="zodiac" src="../assets/11_Aquarius.png"/>
                    <p class="zodiac-name">Водолей</p>
                </div>
            </form>

           
            <div v-if="showBtn" id="hideBtn" class="btn-wrapp">
                <button @click="submitForm"  class="btn"> далее</button>
                <router-link to="/step6"> 
                    <button @click="submitForm" v-if="validate"  class="btn"> далее</button>
                </router-link>
                <router-view/>
            </div>

            <div v-if="validate" id="hideBtn" class="btn-wrapp">
                <router-link to="/step6"> 
                    <button  class="btn"> далее</button>
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
import Footer from '@/components/Footer.vue'
import useValidate from '@vuelidate/core'
import {required} from '@vuelidate/validators'
export default {
    components: {
        Header,Footer
    },
     methods: {
        submitForm(){
            this.v$.$validate()
                if(!this.v$.$error){
                    return(
                        this.validate = true,
                        this.showBtn = false
                    )
                }else {
                    return (
                        this.NoValidate = true
                        
                    )
                }
            }
        },
    validations() {
        return{
            day: {required},
            month: {required},
            year: {required},
        }
    },
     data() {
        el: '#hideBtn'
        return {
            v$: useValidate(),
            showBtn: false,
            validate: false,
            NoValidate: false,
            days: [
                {
                    label: '01',
                    value: '0-1'
                },
                {
                    label: '02',
                    value: '02'
                },
                {
                    label: '03',
                    value: '03'
                },
                {
                    label: '04',
                    value: '04'
                },
                {
                    label: '05',
                    value: '05'
                },
            ],
            months: [
                 {
                    label: '01',
                    value: '01'
                },
                {
                    label: '02',
                    value: '02'
                },
                {
                    label: '03',
                    value: '03'
                },
                {
                    label: '04',
                    value: '04'
                },
                {
                    label: '05',
                    value: '05'
                },
            ],
            years: [
                {
                    label: '1999',
                    value: '1999'
                },
                {
                    label: '2000',
                    value: '2000'
                },
                {
                    label: '2001',
                    value: '2001'
                },
                {
                    label: '2002',
                    value: '2002'
                },
                {
                    label: '2003',
                    value: '2003'
                },

            ],
            
        }
    }
    
}
</script>
<style lang="scss">
    .input{
        display: flex;
        align-items: center;
        height: 55vh;

    }
    
    .zodiac{
        width: 15vw;
    }
    
    .zodiac-name{
        text-align: center
    }
    .line{
        &--step5{
            width:100%;
        }
    }
    select{
        width: 50%;
        height: 5vh;
        border: 1px solid #ccc;
        outline: none;
        position: absolute;
    }
    .choice-item--input{
        margin: 0 70px;
       
    }
    .choice-item {
        width: 50%;
        height: 6vh;
        display: flex;
        align-items: center;
    }
    .error {
        background: #FFD8CF;
        color: #D0060E;
        padding: 20px;
        width: 60%;
        text-align: center;
    }
    @media (min-width: 1000px){
       select{
           max-width: 25%;
       }
        .zodiac{
            width: 8vw;
        }
    }
</style>