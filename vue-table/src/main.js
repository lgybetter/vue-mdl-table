import Vue from 'vue'
import VueMdl from 'vue-mdl'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueMdl)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
