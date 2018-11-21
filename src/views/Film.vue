<template>
    <div>
		<img :src="films[0].Poster" alt="">
    </div>
</template>


<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
     computed: mapState({
		films: state => state.films
	 })
}
</script>

<style lang="scss" scoped>




</style>

