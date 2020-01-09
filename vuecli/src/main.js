import Vue from 'vue'
import App from './App.vue'
import animated from 'animate.css'
import router from './router'
import './plugins/element.js'
import store from './store'
Vue.use(animated)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
