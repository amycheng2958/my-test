import Vue from 'vue'
import App from './App.vue'
import create from '../utils/create.js'

// import router from './router'
import router from './krouter'

import store from './store'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(create)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
