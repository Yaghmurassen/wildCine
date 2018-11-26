import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Fav from '@/views/fav'
import Film from '@/views/Film'
import Search from '@/views/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/favoris',
      name: 'fav',
      component: Fav
	},
	{
		path: '/film',
		name: 'film',
		component: Film
	},
	{
		path: '/search',
		name: 'search',
		component: Search
	}
  ]
})
