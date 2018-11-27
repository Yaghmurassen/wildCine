<template>
  <div id="app">
    <v-header/>
    <router-view/>
	<v-footer/>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import VFooter from '@/components/VFooter'
export default {
  name: 'App',
  components: { // permet de monter d'autres composants
	VHeader,
	VFooter,
  }  
 }

</script>

<style>
#app { 
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin-top: 35px;
	margin-left: 15px;
	margin-right: 15px;
}

</style>
