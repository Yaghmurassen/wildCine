import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		films: [],
		favoris: []
	},
	mutations: { // store.commit()
		initFilms (state, films) {
			state.films = films;
		},
		mutateFavoris (state, fav) {
			state.favoris = fav;
		}
	},
	actions: { // store.dispatch()
		loadFilms({ commit }) {
			fetch('http://localhost:3000/movies')
				.then(data => data.json())
				.then(data => {
					commit('initFilms', data);
				});
		},
		searchFilms({ commit }, userInput) {
			axios.get(`http://localhost:3000/movies/${userInput}`)
				.then( ({ data }) => {
					commit('initFilms', data);
				})
				.catch(e => {
					console.error(e)
				})
		},
		loadFavoris({ commit }) {
			if (localStorage.favoris) {
				commit('mutateFavoris', JSON.parse(localStorage.getItem('favoris')))
			}
		},
		addFavoris({ commit }, id) { 
			if (localStorage.favoris) {
				const prevFavoris = JSON.parse(localStorage.getItem('favoris'));
				if (!prevFavoris.includes(id)) {
					prevFavoris.push(id);
					localStorage.setItem('favoris', JSON.stringify(prevFavoris));
					commit('mutateFavoris', prevFavoris);
				}
				console.log(localStorage)

			} else {
				localStorage.setItem(
					'favoris',
					JSON.stringify([ id ])
				)
				commit('mutateFavoris', [id]);
			}
		},
		rmFavoris({ commit }, id) {
			const prevFavoris = JSON.parse(localStorage.getItem('favoris'));
			// if (prevFavoris.indexOf(id) == -1) { debugger
			   prevFavoris.splice(prevFavoris.indexOf(id), 1) 
			   localStorage.setItem('favoris', JSON.stringify(prevFavoris));
			// }
			commit('mutateFavoris', prevFavoris);
			console.log(localStorage)
		},
		afficheUnFilm({ commit }, userInput) { debugger
			axios.get(`http://localhost:3000/movies/id/${userInput.id}`)
				.then( ({ data }) => {
					commit('initFilms', data);
					userInput.callback();
				})
				.catch(e => {
					console.error(e)
				})
		},
	}
})