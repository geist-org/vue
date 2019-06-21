import Vue from 'vue'
import app from './app.vue'
import { install } from 'vue-auto'
// import ZeitUI from '@zeit-ui/vue'
// import '@zeit-ui/vue/dist/zeit-ui.css'
// ZeitUI.install(Vue)

install(Vue)
new Vue({
  render: h => h(app)
}).$mount('#app')
