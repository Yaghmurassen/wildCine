<template>
	<div class="back">
		<ul @click="afficheUnFilm(film.id)" v-for="film in films" :key="film.id" class="collection">
			<li class="collection-item avatar">
				<img :src="film.Poster" alt="Affiche" class="circle">
				<span class="title">{{film.Title}}</span>
				<p>{{film.Year}}, {{film.Director}}<br>
				   {{film.Runtime}}
				</p>
			</li>
		</ul>
	</div>

</template>

<script>

import { mapState } from 'vuex'

export default {
	props: ["film"],
	data() {
		return {
		}
	},
	computed: mapState({
		films: state => state.films
	}),	
	watch:{
		$route (){
			this.initSearch()
		}
	},
	created() {
		this.initSearch()
		// console.log(this.$route)
	},
	methods : {
		afficheUnFilm(id) { 
			this.$store.dispatch('afficheUnFilm', {id:id, callback: () =>  {
				this.$router.push('/Film');
				this.input = false;
			}})
		},
		initSearch() {
			if ('genre' in this.$route.query && this.$route.query.genre) {
				this.$store.dispatch('searchGenre', this.$route.query.genre)
			}
		}
	}
}
</script>

<style lang="scss" scoped>

.title {
    font-weight: bold;
}
.avatar {
    text-align: left;
} 

.collection-item {
    background-color: #bcc0c3;
}

.collection :hover {
	cursor: pointer;
	// opacity: 0.9;
	background-color: #ffffff;
}

.back {
	margin-top: 30px;
    min-height: 80vh;
    max-width: 1200px;
    margin: auto;
    background-color: grey;
}

</style>
