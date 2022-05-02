<template>
    <div class="wrapp">
        <div class="img-block">      
                <img class="logo" src="../assets/bg-logo.png"/>
        </div>
        <div class="info"> 
            <h3 class="info-title">Узнайте, как 2021 год изменит жизнь каждого из нас!</h3>
            <p class="info-subtitle">К сожалению, 2020 год принес нам немало неприятностей, даже откровенных проблем и несчастий. Не смотря на это, 3 знака зодиака очень скоро обретут долгожданное счастье! 2021 год затронет своими потрясениями каждого из нас.</p>
        </div>
        <ChooseBlock/>   
    </div>
</template>
<script>
import ChooseBlock from './ChooseBlock.vue'

export default {
    components: {
        ChooseBlock
    }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

    .wrapp{
      margin: 15px 20px

    }
    .img-block {
        background-image: url('../assets/bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        height: 28vh;
        border-radius: 5px;
    }
    .logo {
       width: 45vw;
       z-index: 1;
       animation: turning 2s ease-out 1s infinite alternate;
       animation-name: turning;
       animation-timing-function: linear;
    }
    .info {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 30vh;
    }
    .info-title, .info-subtitle{
        font-size: 17px;
    }
    .info-title {
        color: #315DF9;
        font-weight: Bold;
    }
    .info-subtitle {
        color: #343B4D;
        font-weight: 400;
        font-style: normal;
        
    }
    @keyframes turning {
        0% {
            transform: rotate(0deg)
        }
        25% {
            transform: rotate(45deg);
        }
        50% {
            transform: rotate(90deg)
        }
        75% {
            transform: rotate(135deg);
        }
        100% {
            transform: rotate(180deg);
        } 
    }
    @media (min-width: 1000px){
        .logo{
            max-width: 50%;
        }
       .wrapp{
           max-width: 45%;
           margin: 20px auto;
       }
       .img-block{
           height: 35vh;
           
       }
       .info{
           margin: 0;
           height: 20vh;
       }
    }
     @media(min-width: 900px){
         .logo{
             max-width: 40%;
         }
     }
</style>