import Vue from 'vue'
import router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home
      components: {
        default: Home,
        'footer-bar': FooterBar
      },
      meta:{
        keepAlive: true
      }
    }, {
      path: '/category',
      name: 'category',
      // component: Category
      components: {
        default: Category,
        'footer-bar': FooterBar
      }, 
      meta:{
        keepAlive: true
      }
    }, {
      path: '/cart',
      name: 'cart',
      // component: Cart
      components: {
        default: Cart,
        'footer-bar': FooterBar
      },
      meta:{
        keepAlive: true
      }
    }, {
      path: '/profile',
      name: 'profile',
      component: Profile,
      components: {
        default: Profile,
        'footer-bar': FooterBar
      },
      meta:{
        keepAlive: false
      }
    }, {
      path: '/ajax',
      name: 'ajax',
      component: Ajax
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }, {
      path: '*',
      component: Error
    }
  ]
})