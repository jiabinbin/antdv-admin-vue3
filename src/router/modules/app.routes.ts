import { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/BaseLayout'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    name: 'root',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/dashboard.vue')
      }
    ]
  }
]

export default routes
