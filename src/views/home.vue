<template>
<div>
	<v-header title="WILD CINEMA"></v-header>

	<main class="main">
	  <div class="carousel">
		  <film-card class="carousel-item" v-for="film in films" :film="film"></film-card>
	  </div>
	
		<!-- <see-list :film="films"></see-list> -->
	</main>
</div>	
</template>

<script>
import VHeader from '@/components/VHeader'
import FilmCard from '@/components/FilmCard'
// import SeeList from '@/components/SeeList'
import Grafikart from '@/components/Grafikart'


import { mapState } from 'vuex'
export default {
	data() {
		return {
		}
	},
	computed: mapState({
		// arrow functions can make the code very succinct!
		films: state => state.films,
  	}),
	created() { // permet de déclencher une action au montage du composant
		// fetcher les premières data
		this.$store.dispatch('loadFilms');
		this.$store.dispatch('loadFavoris')
	},
	components: { // permet de monter d'autres composants
		VHeader,
		FilmCard,
		Grafikart
		// SeeList
	},
}
</script>

<style>

.main {
	display: flex;
}


</style>
