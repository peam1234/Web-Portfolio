import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: () => import('@/views/Home')
    },
    {
      path: '/',
      component: () => import('@/views/Home')
    },
    {
      path: '/about',
      component: () => import('@/views/About')
    },
    {
      path: '/portfolio',
      component: () => import('@/views/Portfolio')
    }
  ]
})
