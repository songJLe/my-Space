import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'//@直接指向src目录 webpack.config.js中修改
import Two from '@/components/two'
import Three from '@/components/three'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/Two',
      name: 'Two',
      component: Two
    },{
      path: '/Three',
      name: 'Three',
      component: Three
    }
  ]
})
