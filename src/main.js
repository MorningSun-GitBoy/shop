import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  render: h => h(App),
}).$mount('#app')
