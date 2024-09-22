import {
  createRouter,
  createWebHistory,
} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout'),
      redirect: '/dashboard',
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/Home/Home.vue'),
          meta: { title: '首页' },
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
