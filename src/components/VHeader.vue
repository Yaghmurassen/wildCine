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

		<ul id="slide-out" class="sidenav fixed">
			<li>
				<p>WildCine</p>
			</li>
			<li style="padding-top: 40px;">
				<a class="favo" href="#!">
				<i class="fa fa-heart" style="font-size:12px"></i>
				<router-link to="/favoris"> Favoris</router-link></a>
			</li>
			<li>
				<a><i class="material-icons">home</i>
				<router-link to="/"> Home</router-link></a>
			</li>
			<li>
				<input class="waves-effect" type="text" v-model="search"><i class="material-icons">search</i>
			</li>
		</ul>
		<a href="#" data-target="slide-out" class="sidenav-trigger xsNav"><i class="material-icons xsNav">menu</i></a>
		<!-- <a href="#" @click="toggleClick()" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a> -->

        <nav>
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo">WildCine</router-link>
                <ul class="right hide-on-med-and-down">
                    <li><i class="material-icons waves-effect">search<input type="text" v-model="search"></i></li>
                    <li><router-link class="waves-effect" to="/favoris">Favoris<span class="new badge">{{ count }}</span></router-link></li>
                    <li>
                        <a class="dropdown-button waves-effect" href="#!" data-target="dropdown1">Genre
						<i class="material-icons right"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
		<ul v-if="$store.state.films.length !== 0" v-show="input" class="collection">
			<li class="collection-item avatar"  v-for="film in films" :key="film.id" @click="afficheUnFilm(film.id)">
				<img :src="film.Poster" alt="Affiche" class="circle">
				<span class="title">{{film.Title}}</span>
				<p>{{film.Year}}, {{film.Director}}<br>
				   {{film.Runtime}}
				</p>
				<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
			</li>
		</ul>
                
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
        }),
        watch: {
			search(uno, dos) {  
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
		},
        mounted() {
			document.addEventListener('DOMContentLoaded', function() {
				var db = document.querySelectorAll('.dropdown-button');
				var instances = M.Dropdown.init(db);
				var dt = document.querySelectorAll('.dropdown-trigger');
				var instances = M.Dropdown.init(dt);
				// var bc = document.querySelectorAll('.button-collapse');
				// var instances = M.Dropdown.init(bc);
				// var sd = document.querySelectorAll('.sidenav');
				// var instances = M.Sidenav.init(sd);
				var elem = document.querySelector('.sidenav');
				var instance = M.Sidenav.init(elem);
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

.favo {
	color: #fff;
}

#slide-out {
    background-color: #54626c;
    border-radius: 4px;
	& a {
		color: #fff;
		font-size: 18px;
	}
	& p {
		color: #fff;
		font-size: 25px;
	}
}

input {
	height: 60% !important;
	width: 90% !important;
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

.material-icons {
	color: #fff;
}


// FIX SIDENAV SPACING
.side-nav li>a {
  padding: 0 16px;
}
//FIX SIDEBAR DIVIDERS
.side-nav .divider {
  margin:0;
  height:8px;
  border-bottom:1px solid #e0e0e0;
  background-color: transparent;
}

// SIDENAV HEADER
.sidenav-header {
margin-bottom: 0px;
padding: 15px 0 0 15px;
  .row {
    margin-bottom: 0;
  }
}
.sidenav-footer {
margin-bottom: 0px;
padding: 0;
  .row {
    margin-bottom: 0;
    .social-icons {
      a {
        opacity: 0.5;
        padding: 0;
        text-align:center;
        & :hover {
          background-color:inherit;
          opacity: 1;
        }
      }
    }
  }
}

.xsNav {
	display: none;
	@media screen and (max-width: 992px) {
		display: block;
		padding-bottom: 10px;
		// position: absolute;
		// left: 30px;
		// top: 25px;
    	// font-size: 30px;
	}
}


</style>
