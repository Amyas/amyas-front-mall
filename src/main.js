import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

// 公用样式
import '@/scss/index.scss'

// Vant
import registerVant from './libs/vant'

sync(store, router)
registerVant(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
