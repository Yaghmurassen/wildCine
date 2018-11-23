<template>
    <header>
        <!-- Dropdown Structure -->
        <ul id="dropdown1" class="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider"></li>
            <li><a href="#!">three</a></li>
        </ul>
        <ul id="dropdown1" class="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider"></li>
            <li><a href="#!">three</a></li>
        </ul>
        <nav>
            <div class="nav-wrapper">
                <a href="/home" class="brand-logo">WildCine</a>
                <ul class="right hide-on-med-and-down">
                    <li><input type="text" v-model="search"></li>
                    <li><router-link to="/favoris">Favoris<span class="new badge">{{ count }}</span></router-link></li>
                    <!-- Dropdown Trigger -->
                    <li>
                        <a class="dropdown-button" href="#!" data-activates="dropdown1">Genre
                            <i class="material-icons right"></i>
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-button" href="#!" data-activates="dropdown1">Année
                            <i class="material-icons right"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
		<ul @click="afficheUnFilm(film.id)" v-if="film.length !== 0" v-for="film in films" :key="film.id" v-show="input" class="collection">
			<li class="collection-item avatar">
				<img :src="film.Poster" alt="Affiche" class="circle">
				<span class="title">{{film.Title}}</span>
				<p>{{film.Year}}, {{film.Director}}<br>
				   {{film.Runtime}}
				</p>
				<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
			</li>
		</ul>

		<div v-else><p>Votre recherche n'a aboutit à aucun résultat, veuillez ne pas être aussi culturé !!</p></div>


                
    </header>
</template>

<script>
    import { mapState } from 'vuex'
    import axios from 'axios'

    export default {
        props: ["title", "film"],
        data() {
            return {
				search: '',
				input: false,
            }
        },
        computed: mapState({
            films: state => state.films,
            favss: state => state.favoris,
            count() {
                return this.favss.length
            }
        }),
        created() {
        },
        watch: {
			search(uno, dos) { debugger
				if (this.$route.path === '/Film') {
				this.$router.push('/');
				}
                // gérer l'autocomplete
                if (uno.length > 1) {
					this.$store.dispatch('searchFilms', uno);
					this.input = true;
                } else {
					this.$store.dispatch('loadFilms');
					this.input = false;
				}
            }
		},
		methods : {
			afficheUnFilm(id) { 
				this.$store.dispatch('afficheUnFilm', {id:id, callback: () =>  {
					this.$router.push('/Film');
					this.input = false;
				}})
			}
		},
        mounted() {
            // document.querySelectorAll('.dropdown-button').dropdown();
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.dropdown-button');
                var instances = M.Dropdown.init(elems);
            });
        }     
    }

</script>

<style lang="scss" scoped>

$break-large: 992px;

header {
	max-width: 1400px;
    margin: auto;
}

h1 {
    font-size: 50px;
    color: rgb(165, 72, 72);
}

nav {
  background-color:	#54626c;
      border-radius: 3px;
}

@media screen and (min-width: $break-large) {
 nav .brand-logo {
    left: 20px;
 }  
}
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

</style>




