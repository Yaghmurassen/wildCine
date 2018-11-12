import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		films: []
	},
	mutations: { // store.commit()
		initFilms (state, films) {
			state.films = films;
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
		}
	}
})