import Vue from 'vue'
import App from './App.vue'
import VueScheduler from '../src/plugin.js'
import router from './router'

Vue.use(VueScheduler)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
