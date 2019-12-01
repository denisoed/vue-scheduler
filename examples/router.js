import Vue from 'vue'
import Router from 'vue-router'
import VueSchedulerDemo from './components/VueSchedulerDemo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Demo',
      path: '*',
      component: VueSchedulerDemo
    }
  ]
})
