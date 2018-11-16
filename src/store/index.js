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
		favoris (state, favoris) {
			state.favoris = favoris;
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
				commit('favoris', JSON.parse(localStorage.getItem('favoris')))
			}
		},
		addFavoris({ commit }, id) {
			debugger;
			const prevFavoris = JSON.parse(localStorage.getItem('favoris'))
		},
		rmFavoris({ commit }, id) {
			const prevFavoris = JSON.parse(localStorage.getItem('favoris'))
		}
	}
})