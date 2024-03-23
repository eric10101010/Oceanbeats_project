import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    //前台
    {
      path: '/',
      component: () => import('../view/Front/FrontView.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../view/Front/HomeView.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('../view/Front/AboutView.vue'),
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('../view/Front/ContactView.vue'),
        },
        {
          path: 'products',
          name: 'Products',
          component: () => import('../view/Front/ProductsView.vue'),
        },
        {
          path: 'product/:id',
          name: 'Product',
          component: () => import('../view/Front/ProductDetail.vue'),
        },
        {
          path: 'cart',
          name: 'Cart',
          component: () => import('../view/Front/CartView.vue'),
        },
        {
          path: 'checkorder',
          name: 'CheckOrder',
          component: () => import('../view/Front/CheckOrder.vue'),
        },
        {
          path: 'paidorder/:id',
          name: 'PaidOrder',
          component: () => import('../view/Front/PaidOrder.vue'),
        },
      ],
    },
    //登入頁
    {
      path: '/login',
      component: () => import('../view/Login/LoginView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../view/Login/404.vue'),
    },
    //後台
    {
      path: '/admin',
      component: () => import('../view/DashBoard/DashBoardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../view/DashBoard/ProductsView.vue'),
        },
        {
          path: 'order',
          component: () => import('../view/DashBoard/OrderView.vue'),
        },
        {
          path: 'coupon',
          component: () => import('../view/DashBoard/CouponView.vue'),
        }
      ],
    },
  ]
})

export default router

