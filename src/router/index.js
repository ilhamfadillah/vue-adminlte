import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MenuFirst from '@/components/content/MenuFirst'
import MenuSecond from '@/components/content/MenuSecond'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/menu_first',
      name: 'MenuFirst',
      component: MenuFirst
    },
    {
      path: '/menu_second',
      name: 'MenuSecond',
      component: MenuSecond
    },
  ]
})

