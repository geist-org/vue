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
    path: '/docs', component: DocumentSlot,
    children: [{
      path: ':name', name: 'DocumentDetail', component: DocumentMain,
    }, {
      path: '', name: 'DocumentMain', component: DocumentMain,
    }],
  }],
})
