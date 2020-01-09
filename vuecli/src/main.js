import Vue from 'vue'
import App from './App.vue'
import animated from 'animate.css'
import router from './router'
import './plugins/element.js'
Vue.use(animated)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
