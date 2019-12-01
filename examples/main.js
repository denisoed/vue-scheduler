import Vue from 'vue';
import App from './App';
import VueSchedulerPlugin from '../src/plugin';

Vue.use(VueSchedulerPlugin);

new Vue({
  render: h => h(App)
}).$mount('#app');
