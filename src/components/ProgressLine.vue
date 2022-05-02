<template >
    <div class="line-wrapp">
        <div class="line ">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
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
        &--step{
        width: 300px;
        }
    }
</style>