<template>
<fas icon='cofee'/>
  <router-view/>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, p {
    font-family: 'Roboto', sans-serif;
  }
  
    .wrap {
      margin: 15px 20px;
    }
    
    .choice-item {
        height: 6vh;
        margin-left:10px;
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
        
    }
</style>
