<template>
    <header>
        <!-- Dropdown Structure -->
        <ul id="dropdown1" class="dropdown-content">
            <li><router-link to="search?genre=Action">Action</router-link></li>
            <li><router-link to="search?genre=Adventure">Adventure</router-link></li>
            <li><router-link to="search?genre=Fantasy">Fantasy</router-link></li>
            <li><router-link to="search?genre=Drama">Drama</router-link></li>
            <li><router-link to="search?genre=Horror">Horror</router-link></li>
            <li><router-link to="search?genre=Sci">Sci-Fi</router-link></li>
            <li><router-link to="search?genre=Thriller">Thriller</router-link></li>
            <li><router-link to="search?genre=Comedy">Comedy</router-link></li>
            <li><router-link to="search?genre=Crime">Crime</router-link></li>
            <li><router-link to="search?genre=Biography">Biography</router-link></li>
            <li><router-link to="search?genre=History">History</router-link></li>
        </ul>

        <!-- Slide Nav On Mobile -->

        <ul id="slide-out" class="side-nav">
                <li><div class="user-view">
                        <div class="background">
                            <img src="images/office.jpg">
                        </div>
                    </div>
                </li>
                <li><a href="#!"><i class="fa fa-heart" style="font-size:12px"></i><router-link to="/favoris"> Favoris</router-link></a></li>
                <li><input class="waves-effect" type="text" v-model="search"></li>
             </ul>

        <a href="#" @click="toggleClick()" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>


        <nav>
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo">WildCine</router-link>
                <ul class="right hide-on-med-and-down">
                    <li><input type="text" v-model="search"></li>
                    <li><router-link to="/favoris">Favoris<span class="new badge">{{ count }}</span></router-link></li>
                    <!-- Dropdown Trigger -->
                    <li>
                        <a class="dropdown-button" href="#!" data-target="dropdown1">Genre
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
		<ul @click="afficheUnFilm(film.id)" v-if="film.id.length !== 0" v-for="film in films" :key="film.id" v-show="input" class="collection">
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
            },
            // genre: function() {
            //     return this.film.filter(function(genre) {
            //         if (this.film[id].Genre === this.film.Genre) {
            //             return this.film[id]
            //             afficheUnFilm(film.id)
            //         }
            //     })
            // }
        }),
        // created() {
        // },
        watch: {
			search(uno, dos) {  console.log(this.film)
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
            },
		},
		methods : {
			afficheUnFilm(id) { 
				this.$store.dispatch('afficheUnFilm', {id:id, callback: () =>  {
					this.$router.push('/Film');
					this.input = false;
				}})
            },
            toggleClick() { 
                let isShow = $('.side-nav').show();
                if (isShow) {
                    $('.side-nav').hide();
                } else {
                    $('.side-nav').show();
                }
            }
		},
        mounted() {
            // document.querySelectorAll('.dropdown-button').dropdown();
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.dropdown-button');
                var instances = M.Dropdown.init(elems);
            });
		
			document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.dropdown-trigger');
                var instances = M.Dropdown.init(elems);
			});
			
            // $(".button-collapse").sideNav();
            // $('.button-collapse').sideNav('show'); debugger
            // $('.collapsible').collapsible();

            // this.toggleClick()
            
            // {
            //     menuWidth: 300, // Default is 300
            //     edge: 'right', // Choose the horizontal origin
            //     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            //     draggable: true, // Choose whether you can drag to open on touch screens,
            //     onOpen: function(el) { }, // A function to be called when sideNav is opened
            //     onClose: function(el) { }, // A function to be called when sideNav is closed
            //     }
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

#slide-out {
    background-color: wheat;
    border-radius: 4px;
}

#dropdown1 {
	top: -64px;
}

.dropdown-content {
	background-color: #54626c;
}

.dropdown-content li>a, .dropdown-content li>span {
	color: #fff;
}



</style>




// $( ".faq-question" ).click(function() {
//     $(this).toggleClass('open');
// });

// .faq-question .icon:after {
//     content: '+';
// }
// .faq-question.open .icon:after {
//     content: '-';
// }

