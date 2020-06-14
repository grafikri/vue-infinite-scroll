import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueInfiniteScroll from '../../src/index'
Vue.use(VueInfiniteScroll, { distance: 1 })

new Vue({
  render: h => h(App),
}).$mount('#app')
