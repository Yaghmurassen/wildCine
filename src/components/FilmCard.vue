<template>
	<a class="listfilm z-depth-3">
		<img :src="film.Poster" alt="Affiche">
		<!-- <a class="btn-floating pulse"><i :class="favClass" @click.stop="toggleFav"></i></a> -->
	</a>
</template>

<script>
export default {
	props: ['film'],
	data() {
		return {
			favClass: {
				'fa': true,
				'fa-heart': false,
				'fa-heart-o': false,
			},
			isFav: false
		}
	},
	created() {
		let id = this.film.id,
			favs = this.$store.state.favoris;
		if (favs.includes(id)) {
			this.isFav = true;
		} else {
			this.isFav = false;
		}
		this.favClass['fa-heart'] = this.isFav;
		this.favClass['fa-heart-o'] = !this.isFav

        var elems = document.querySelectorAll('.carousel');
		var instances = M.Carousel.init(elems);
		var instance = M.Carousel.init({
            fullWidth: true
        });
	},
	methods: {
		toggleFav () {
			this.isFav = !this.isFav;
			debugger;
			if (this.isFav) {
				this.$store.dispatch('addFavoris', this.film.id)
			} else {
				this.$store.dispatch('rmFavoris', this.film.id)
			}

			this.favClass['fa-heart'] = !this.favClass['fa-heart'];
			this.favClass['fa-heart-o'] = !this.favClass['fa-heart-o'];
		}
	}
}
</script>

<style lang="scss">

.listfilm {
	position: relative;
	& img {
		height: 20em;
		width: 14em;
	}
}

.fa-heart, .fa-heart-o {
	// position: absolute;
	right: 20px;
	top: 20px;
	font-size: 20px;
}

</style>
