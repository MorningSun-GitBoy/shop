import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profil from './views/Profile.vue'
import Catlog from './views/Catlog.vue'
import Chart from './views/Chart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Profil
    },
    {
      path: '/Catlog',
      name: 'catlog',
      component: Catlog
    },
    {
      path: '/Chart',
      name: 'chart',
      component: Chart
    }
  ]
})
