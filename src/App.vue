<template>
  <div id="app">
    <v-header/>
    <router-view/>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
export default {
  name: 'App',
  components: { // permet de monter d'autres composants
    VHeader
  }  
 }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 35px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>
