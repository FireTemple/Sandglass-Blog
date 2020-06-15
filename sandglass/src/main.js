import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store"

// 导入Font Awesome lib
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import './plugins/element.js';

// 导入bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"
Vue.config.productionTip = false

Vue.prototype.$store = store;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
