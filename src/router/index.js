import Vue from 'vue'
import Router from 'vue-router'

//
import HelloWorld from '@/views/HelloWorld'
import Home from '@/views/Home'
import List from '@/views/List'
import Details from '@/views/Details'
import Login from '@/views/Login'
import ForgotPass from '@/views/ForgotPass'
import AddUser from '@/views/AddUser'
import AddHeader from '@/views/AddHeader'

Vue.use(Router)
/**
 * 指向多个路由组件
 * path: '/',用户访问地址-
   name: 'HelloWorld',
   component: HelloWorld
 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgotPass',
      name: 'ForgotPass',
      component: ForgotPass
    },
    {
      path: '/addUser',
      name: 'AddUser',
      component: AddUser
    }
    ,
    {
      path: '/addHeader',
      name: 'AddHeader',
      component: AddHeader
    }
  ]
})
