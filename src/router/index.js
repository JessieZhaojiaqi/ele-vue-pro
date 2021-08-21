import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/layout/index.vue'),
    children: [
      {
        path: 'first',
        components: {
          default: () => import('../views/About.vue')
        },
        name: 'Index',
        meta: {
          title: '首页', icon: 'index', noCache: true, affix: true
        }
      },
      {
        path: 'home',
        components: {
          default: () => import('../views/Home.vue')
        },
        name: 'Home',
        meta: {
          title: 'Home页面', icon: 'index', noCache: true, affix: true
        }
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
