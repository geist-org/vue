import Vue from 'vue'
import app from './app.vue'
import { install } from 'vue-auto'

install(Vue)
new Vue({
  render: h => h(app)
}).$mount('#app')
