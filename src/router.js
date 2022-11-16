import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Frame from './views/frame'
import Plan from './views/plan'
import Profilecard from './views/profilecard'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Frame',
      path: '/frame',
      component: Frame,
    },
    {
      name: 'Plan',
      path: '/plan',
      component: Plan,
    },
    {
      name: 'profilecard',
      path: '/profilecard',
      component: Profilecard,
    },
  ],
})
