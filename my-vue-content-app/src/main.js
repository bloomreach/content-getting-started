import Vue from 'vue'
import App from './App.vue'
import { BrSdk } from '@bloomreach/vue-sdk';

Vue.config.productionTip = false
Vue.use(BrSdk);

new Vue({
  render: h => h(App),
}).$mount('#app')
