import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './views/Homepage'
import List from './views/List'
import Shopcar from './views/Shopcar'
import Me from './views/Me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/boa',
      component: Homepage
    },
    {
      path: '/List',
      component: List
    },
    {
      path: '/Shopcar',
      component: Shopcar
    },
    {
      path: '/Me',
      component: Me
    },
  ]
})
