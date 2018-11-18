import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Fav from '@/views/fav'

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
    }
  ]
})
