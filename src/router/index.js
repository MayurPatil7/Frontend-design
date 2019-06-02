import Vue from 'vue'
import Router from 'vue-router'
import AppToolbar from '@/components/AppToolbar'
import AppLogin from '@/components/AppLogin'
import AppRegister from '@/components/AppRegister'
import AppuserProfile from '@/components/AppuserProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppToolbar',
      component: AppToolbar

    },
    {
      path: '/Login',
      name: 'AppLogin',
      component:AppLogin
    },
    
    {
        path: '/Register',
        name: 'AppRegister',
        component:AppRegister
    },
    {
      path: '/UserProfile',
      name: 'AppuserProfile',
      component:AppuserProfile
    }
    

  ]
})
