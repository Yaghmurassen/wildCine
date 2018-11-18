<template>
    <div class="fav">
        <ul v-for="film in films" :key="film.id">
            <li v-for="favs in favss" v-if="film.id == favs">
                <img :src="film.Poster" alt="Affiche">
                <p>{{film.Title}} est sortie en {{film.Year}}. Il appartient aux genres suivant : {{film.Genre}}. Les acteurs principaux sont {{film.Actors}}.</p>
                <p>Lors de sa sortie {{film.Title}} a été récompensé par {{film.Awards}}</p>
            </li>
        </ul>
    </div>
</template>


<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
    props: ['film'],
    data() {
		return {
            // fav: true
		}
    },
    computed: mapState({
        films: state => state.films,
        favss: state => state.favoris
  	}),
    created() { 

        this.$store.dispatch('loadFilms');
        this.$store.dispatch('loadFavoris');
        
        console.log(this.films.length, this.films[0].id)

		// let id = this.film.id,
        // let favs = this.$store.state.favoris;
        // console.log(favs) 
        
        
        // for (let i = 0; i < this.films.length; i++) { debugger
        //   JSON.parse(localStorage.getItem('favoris')).forEach(e => {
        //       if (this.films[i].id == JSON.parse(localStorage.getItem('favoris'))) { debugger
        //           this.fav = true;
        //       } else {
        //           this.fav = false;
        //       }
        //   });
        // }
    }
}



</script>


<style lang="scss" scoped>

.fav {
   margin-top: 25px; 
   height: 100%;
   background-color: grey;
}

img { 
   height: 10em;
}

ul {
    display: flex;
    padding-left: 15px;
    justify-content: flex-start;
    padding-top: 10px;
    padding-right: 15px;
}


</style>
