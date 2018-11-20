<template>
    <div class="fav">
        <ul>
            <li v-for="film in userFavs">
                <div class="row">
                    <div class="col s12 m3 l2">
                        <img class="responsive-img" :src="film.Poster" alt="Affiche">
                    </div>
                    <div class="col s12 m9 l10">
                        <p><strong>{{film.Title}}</strong> est sortie en {{film.Year}}. Il appartient aux genres suivant : {{film.Genre}}. Les acteurs principaux sont {{film.Actors}}.</p>
                        <p>Lors de sa sortie {{film.Title}} a été récompensé par {{film.Awards}}</p>
                        <p><strong>{{film.Synopsis}}</strong> : {{film.Plot0}}</p>
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
   margin-top: 30px; 
   height: 100%;
   max-width: 1200px;
   margin: auto;
   background-color: grey;
}

.row {
    background-color: #bfbfb9;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 12px 0 rgba(0,0,0,0.19);
    border-radius: 35px;
}

img { 
    max-width: 150px;
    padding-top: 6px;
    -moz-transition: all 1.5s;
    -webkit-transition: all 1.5s;
    transition: all 1.5s;
    &:hover{
        opacity: 0.5;
        transform: scaleX(1.2);
        transition-duration: 800ms;
        cursor: pointer;
    }
}

ul {
    display: flex;
    padding-left: 15px;
    flex-direction: column;
    padding-top: 10px;
    padding-right: 15px;
    margin-top: 40px;
}

li {
    padding-bottom: 15px;
}

p {    
    text-align: left; 
    padding: 0 30px;
    color: #333;
    @media screen and (min-width: 720px) {
        &:first-of-type {
        padding-top: 30px;
        }
    }
}

strong {
    font-size: 20px;
    &:hover{
        cursor: pointer;
    }
}

// .zoom {
//   -moz-transition: all 1.5s;
//   -webkit-transition: all 1.5s;
//   transition: all 1.5s;
// }

// .zoom:hover {
//     transform: scale(1.5); 
//     -moz-transition: all 1.5s;
//     -webkit-transition: all 1.5s;
//     transition: all 1.5s;
// }

</style>