import VueScheduler from './components/VueScheduler';

const VueSchedulerPlugin = {
  install(Vue, options = {}) {
    // TODO: allow options to be specified for global settings
    Vue.component(options.alias || 'VueScheduler', VueScheduler);
  }
};

export default VueSchedulerPlugin;

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueSchedulerPlugin);
}
