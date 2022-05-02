<template>
    <div class="step6">
       <Header/> 
        <div class="wrapp--result">
            <h2 class='result-title'>Обработка Ваших данных:</h2>
            <div class="status">
                <div class="status-bar">
                    <div class="status-progress">20%</div>
                </div>
                <div class="status-block">
                    <p class="response">Анализ введенных данных . . . . . . . <span>Выполнено!</span></p>
                    <p class="response">Коррекция астрологического знака . . . . . . . <span>Выполнено!</span></p>
                    <p class="response">Генерация предсказания . . . . . . . <span>Выполнено!</span></p>
                    <p class="response">Сохранение результата . . . . . . . <span>Выполнено!</span></p>
                    <p class="response">Поиск свободного оператора . . . . . . . <span>Выполнено!</span></p>
                    <p class="response">Начала озвучки и записи аудио-сообщения  . . . . . . . </p>
                    <p class="response-status">Идёт запись!</p>
                    <p class="response">Готово!</p>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>

<style>
    .result-title{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        margin: 20px 0;
    }
    .wrapp--result{
        margin: 15px 20px;
    }
    .status-block{
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .status-bar{
        background: #F3F4F8;
        margin: 20px 0;
        height: 7vh;
        width: 100%;
        border-radius: 5px;
    }
    .status-progress{
        background: #419330;
        color: #F3F4F8;
        text-align: center;
        padding: 15px;
        width: 30%;
        height: 7vh;
        border-radius: 5px;

    }
    .response-status {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        color: #D0060E;
    }
    span{
        color: #419330;
    }
    .response{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
    }
</style>