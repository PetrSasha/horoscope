<template>
    <div class="step">
        <Header/>
        <div class="wrapp">
            <h2 class='result-title'>Спасибо за Ваши ответы!</h2>
            <div class="info"> 
                <h3 class="info-title">Поздравляем! Прослушать свой персональный гороскоп возможно уже сейчас!</h3>
                <p class="info-subtitle">2021 год Вас ошарашит!
                    Вас ждёт то, чего Вы никак не ожидали. Первые известия Вы получите совсем скоро, возможно это 17-18 ноября!</p>
                <p class="info-subtitle">Что бы прослушать аудио-сообщение, необходимо нажать на кнопку ниже и позвонить со своего мобильного телефона. Позвоните и Прослушайте </p>
            </div>
            <div  id="Btn" class="btn-wrapp">
                <router-link to="/step8"> 
                        <button class="btn">Звонить и слушать</button>
                    </router-link>
                <router-view/>
            </div>
           
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
    data(){
       
    },
    
    components: {
        Header,
    }
    
    
    
}
</script>
<style>
.step{
    height: 100vh;
}

.info{
    height: 50vh;
}
    
</style>