<template>
<div style="height:81vh">
	<main class="main">
		<div v-if="films.length !== 0" class="carousel">
			<film-card class="carousel-item" v-for="film in films" :key="film.id" :film="film"></film-card>
		</div>
		<div style="margin:auto;" v-else><img class="cineVide" src="https://blog.francetvinfo.fr/bureau-rome/files/2018/01/Cinema-gratis.jpg" alt="404"><p class="nomatch">Votre recherche n'a aboutit à aucun résultat, veuillez ne pas être aussi culturé !!</p></div>
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
	},
	mounted() { 
		M.AutoInit();
	},
	components: { // permet de monter d'autres composants
		FilmCard
	},
}
</script>

<style lang="scss" scoped>

.main {
	display: flex;
	width: 100%;
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
	width: 80%;
	padding-top: 30px;
	padding-bottom: 30px;
	margin-top: 60px;
	margin-bottom: 30px;
	margin-left: auto;
    margin-right: auto;
	border-radius: 35px;
	max-width: 1400px;
	background-color: #bcc0c3;
	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 12px 0 rgba(0,0,0,0.19);
}

.cineVide {
	max-width: 100%;
    padding-top: 60px;
}

.nomatch {
	font-weight: bold;
    color: white;
    font-size: 20px;
    margin-top: 80px;
}

</style>
