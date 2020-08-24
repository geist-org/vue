import './assets/index.styl'
import Vue from 'vue'
import * as VueAuto from 'vue-auto'
import App from './app.vue'
import GeistUI from '../packages'
import router from './router'
import Examples from '../docs/examples'

VueAuto.install(Vue, { prefix: 'ex' })
Vue.config.productionTip = false
Vue.use(GeistUI)
Examples.install(Vue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
