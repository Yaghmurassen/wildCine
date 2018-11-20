<template>
<div>
	<main class="main">
	  <div class="carousel">
		  <film-card class="carousel-item" v-for="film in films" :key="film.id" :film="film"></film-card>
	  </div>
	
		<!-- <see-list :film="films"></see-list> -->
	</main>
	<article>
		<p>WildCine est une plateforme OpenSource de base de donnée de films. Les utilisateurs peuvent rechercher et constituer leurs favoris dans un espace dédié.</p>
		<p>Ils ont aussi la possibilité de consitituer leur propre ressource en ajoutant les films de leur choix sur la page "Ajout".</p>
		<p>Ne soyez pas timide et partagez cela avec vos amis sur les différents réseaux sociaux.</p>
		<p>Bonne visite à tous !</p>
	</article>
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
		@media screen and (max-width: 600px) {
			& img {
				width: 85%;
			}
		}
	}
}

p {     
    padding: 0 30px;
    color: #333;
	font-size: 16px;
}

article {
	padding-top: 30px;
	padding-bottom: 30px;
	margin-top: 40px;
	margin-bottom: 30px;
	margin-left: auto;
    margin-right: auto;
	border-radius: 35px;
	max-width: 1400px;
	background-color: #bcc0c3;
	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 12px 0 rgba(0,0,0,0.19);
}

// background: linear-gradient(to right, blue, white);
// background: linear-gradient(70deg, blue, pink);
// background-image:radial-gradient(white, black);

</style>
