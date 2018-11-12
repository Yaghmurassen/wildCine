<template>
	<header>
		<h1>{{ title }}</h1>
		<nav>
			<input type="text" v-model="search">
		</nav>
	</header>
</template>

<script>
import axios from 'axios'

export default {
	props: ["title"],
	data() {
		return {
			search: ''
		}
	},
	created() {
	},
	watch: {
		search() {
			// gérer l'autocomplete
			if (this.search.length > 2)
				this.$store.dispatch('searchFilms', this.search);
		}
	},
}
</script>

<style>

</style>
