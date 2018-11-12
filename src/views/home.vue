<template>
<div>
	<v-header title="Bienvenue sur le site !!"></v-header>

	<main>
		<div v-for="film in films">
			<film-card :film="film"></film-card>
		</div>
	</main>
</div>	
</template>

<script>
import VHeader from '@/components/VHeader'
import FilmCard from '@/components/FilmCard'
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
	},
	components: { // permet de monter d'autres composants
		VHeader,
		FilmCard
	},
}
</script>

<style>

</style>
