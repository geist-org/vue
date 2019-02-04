import Vue from 'vue'
import App from './app.vue'
import Comoonents from './components'
import ZeitUI from '../packages'
import '../packages/style.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(ZeitUI)
Comoonents.install(Vue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
