<template>
<div>
	<h1>{{ title }} - {{ joinArray(genres) }} </h1>
	<div>
		<p>Synopsis: <br> {{ plot }} </p>
	</div>
</div>
</template>

<script>
export default {
	props: ['film'],
	data() {
		return {
			title: '',
			desc: '',
			genres: [],
		}
	},
	created() {

		// Ici ça marchait, mais plus maintenant.
		// Il faut s'inspirer du mapage comme dans la home,
		// afin que les propriétés soient réactives.
		// Ca permettra de tout récupérer d'un coup

		this.title = this.film.Title;
		this.plot = this.film.Plot;
		this.genres = this.film.Genre;
	},
	methods: {
		joinArray(val) {
			return val.join(', ').replace(/,\s$/, '')
		}
	}
}
</script>

<style>

</style>
