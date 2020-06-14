import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueInfiniteScroll from '@grafikri/vue-infinite-scroll'

Vue.use(VueInfiniteScroll, { distance: 1 })

new Vue({
  render: h => h(App),
}).$mount('#app')
