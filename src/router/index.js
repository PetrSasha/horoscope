import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/step1',
    name: 'step1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step1.vue')
  },
  {
    path: '/step2',
    name: 'step2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step2.vue')
  },
  {
    path: '/step3',
    name: 'step3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step3.vue')
  },
  {
    path: '/step4',
    name: 'step4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step4.vue')
  },
  {
    path: '/step5',
    name: 'step5',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step5.vue')
  },
  {
    path: '/step6',
    name: 'step6',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step6.vue')
  },
  {
    path: '/step7',
    name: 'step7',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step7.vue')
  },
  {
    path: '/step8',
    name: 'step8',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step8.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
