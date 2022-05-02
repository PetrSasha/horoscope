<template>
  <div class="home">
    <Header/>
    <Info/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Info from '@/components/Info.vue'
import ChooseBlock from '@/components/ChooseBlock.vue'
export default {
  name: 'HomeView',
  components: {
    Header, Info,ChooseBlock
  }
}
</script>
