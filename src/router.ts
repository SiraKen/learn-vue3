import { createRouter, createWebHistory } from 'vue-router';
import { getCurrentUser } from 'vuefire';
import HomeView from './views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/about',
      name: 'about',
      meta: {
        requiresAuth: true,
      },
      component: () => import('./views/AboutView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('./views/AuthView.vue'),
    },
    {
      path: '/dynamic-route/:id',
      name: 'dynamic-route',
      component: () => import('./views/DynamicRouteView.vue'),
    },
  ],
});

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return {
        path: '/auth',
        query: { redirect: to.fullPath },
      };
    }
  }
});

export { router };
