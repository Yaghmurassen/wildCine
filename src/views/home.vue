<template>
<div>
	<main class="main">
	  <div class="carousel">
		  <film-card class="carousel-item" v-for="film in films" :key="film.id" :film="film"></film-card>
	  </div>
	
		<!-- <see-list :film="films"></see-list> -->
	</main>
</div>	
</template>

<script>
import FilmCard from '@/components/FilmCard'

import { mapState } from 'vuex'
export default {
	data() {
		return {
		}
	},
	computed: mapState({
		films: state => state.films
  	}),
	created() { // permet de déclencher une action au montage du composant
		// fetcher les premières data
		this.$store.dispatch('loadFilms');
		this.$store.dispatch('loadFavoris');

		// var elems = document.querySelectorAll('.carousel');
		// var instances = M.Carousel.init(elems);

	},
	mounted() { 
		M.AutoInit();
	},
	components: { // permet de monter d'autres composants
		FilmCard
	},
}
</script>

<style lang="scss">

.main {
	display: flex;
}
.carousel{
	height: 430px;
	& .carousel-item {
		top: -50px;
	}
}

</style>
