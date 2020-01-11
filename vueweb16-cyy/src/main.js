import Vue from 'vue'
import App from './App.vue'
import create from '../utils/create.js'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(create)
new Vue({
  render: h => h(App),
}).$mount('#app')
