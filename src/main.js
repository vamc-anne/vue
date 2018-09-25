import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false

export default new Vue({
  render: h => h(App)
}).$mount('#outlet')
