<template>
        <div class="header">
            <h1 class="header__title">Новый гороскоп на 2021 год!</h1>
            <p class="header__subtitle">Узнайте, что Вас ждёт.</p>
        </div>
</template>
<script>
export default {
    
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
    
    .header {
        padding: 14px 27px 14px 21px;
        background: #315DFA;
        line-height: 18px;
        height: 10vh;
        box-shadow: 10px 5px 5px #ccc;
    }
    .header__title, .header__subtitle {
        color: #AFDCE5;
        font-weight: Bold;
    }
    .header__title{
        text-transform: uppercase;
        font-size: 17px;
        margin-bottom: 5px;
    }
    .header__subtitle {
        font-size: 12px;
    }
    @media (min-width: 1000px){
        .header__title, .header__subtitle {
            text-align: center; 
            
        }
        .header__title{
            padding-top: 10px;
        }
    }
</style>