import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import page01 from '@/components/page01'
import page02 from '@/components/page02'
import login from '@/components/login'
import register from '@/components/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/page01',
      name: 'page01',
      component: page01,
    },
    {
      path: '/page02',
      name: 'page02',
      component: page02
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
