import Vue from 'vue'
import Router from 'vue-router'
import { withRouters } from 'vue-auto'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: withRouters([{
    path: '/', redirect: '/docs',
  }, {
    path: '/docs', component: 'document-slot',
    children: [{
      path: ':name', component: 'document-main',
    }, {
      path: '', component: 'document-main',
    }],
  }]),
})
