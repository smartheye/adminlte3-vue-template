import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import App from './App.vue'

// eslint-disable-next-line
//import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
