import Vue from 'vue'
import Router from 'vue-router'
import {
  DocumentSlot, DocumentMain,
} from './pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: '/docs',
  }, {
    path: '/docs', name: 'DocumentSlot', component: DocumentSlot,
    children: [{
      path: '', name: 'DocumentMain', component: DocumentMain,
    }],
  }],
})
