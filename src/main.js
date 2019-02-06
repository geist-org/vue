import Vue from 'vue'
import App from './app.vue'
import Comoonents from './components'
import ZeitUI from '../packages'
import router from './router'
import Examples from '../docs/examples'

import '../packages/style.css'
import './assets/styles/index.styl'

Vue.config.productionTip = false
Vue.use(ZeitUI)
Comoonents.install(Vue)
Examples.install(Vue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
