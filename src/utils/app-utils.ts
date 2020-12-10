import { APP_ROUTER_MODE } from '@/config'
import { createWebHashHistory, createWebHistory } from 'vue-router'

export const getAppRouterMode = () => {
  if (APP_ROUTER_MODE === 'history') {
    return createWebHistory(process.env.BASE_URL)
  } else {
    return createWebHashHistory(process.env.BASE_URL)
  }
}
