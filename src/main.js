import 'babel-polyfill';
import Vue from 'vue';
import store from './store';
import App from './components/app/app.vue';

Vue.config.productionTip = false;

new Vue({
  store, // insert store to whole application
  el: '#app',
  render: h => h(App)
});
