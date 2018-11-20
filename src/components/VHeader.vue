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
                
                
    </header>
</template>

<script>
    import { mapState } from 'vuex'
    import axios from 'axios'

    export default {
        props: ["title"],
        data() {
            return {
                search: ''
            }
        },
        computed: mapState({
            // films: state => state.films,
            favss: state => state.favoris,
            count() {
                return this.favss.length
            }
        }),
        created() {
        },
        watch: {
            search() {
                // gérer l'autocomplete
                if (this.search.length > 1) {
                    this.$store.dispatch('searchFilms', this.search);
                } else { 
                    this.$store.dispatch('loadFilms');
                }   
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
}

@media screen and (min-width: $break-large) {
 nav .brand-logo {
    left: 20px;
 }  
}


</style>