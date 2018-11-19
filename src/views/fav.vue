<template>
    <div class="fav">
        <ul>
            <li v-for="film in userFavs">
				<div class="row">
					<div class="col s12 m3 l2">
						<img class="responsive-img zoom" :src="film.Poster" alt="Affiche">
					</div>
					<div class="col s12 m9 l10">
						<p>{{film.Title}} est sortie en {{film.Year}}. Il appartient aux genres suivant : {{film.Genre}}. Les acteurs principaux sont {{film.Actors}}.</p>
						<p>Lors de sa sortie {{film.Title}} a été récompensé par {{film.Awards}}</p>
					</div>
				</div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
    data() {
		return {
		}
    },
	computed: {
		...mapState({
			films: state => state.films,
			favss: state => state.favoris
		}),
		userFavs() {
			return this.$store.state.films.filter( el => {
				return this.$store.state.favoris.includes(el.id)
			})
		}

	},
    created () { 

        this.$store.dispatch('loadFilms');
        this.$store.dispatch('loadFavoris');

    }
}



</script>


<style lang="scss" scoped>

.fav {
   margin-top: 25px; 
   height: 100%;
   background-color: grey;
}

.row {
	background-color: #98998291;
	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 12px 0 rgba(0,0,0,0.19);
}

img { 
	max-width: 150px;
//    height: 10em;
//    float: left;
}

ul {
    display: flex;
    padding-left: 15px;
    flex-direction: column;
    padding-top: 10px;
    padding-right: 15px;
}

li {
	padding-bottom: 15px;
}

p {	    
	padding-left: 25px;
}
.zoom {
  -moz-transition: all 1.5s;
  -webkit-transition: all 1.5s;
  transition: all 1.5s;
}


.zoom:hover {
	transform: scale(1.5); 
  	-moz-transition: all 1.5s;
    -webkit-transition: all 1.5s;
    transition: all 1.5s;
}

</style>
