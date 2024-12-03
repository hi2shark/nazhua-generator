import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

const constantRoutes = [{
  name: 'Home',
  path: '/',
  component: () => import('@/views/home.vue'),
}, {
  path: '/:pathMatch(.*)*',
  redirect: {
    name: 'Home',
  },
}];

const routerOptions = {
  history: createWebHashHistory(),
  scrollBehavior: () => ({
    top: 0,
    behavior: 'smooth',
  }),
  routes: constantRoutes,
};
const router = createRouter(routerOptions);

router.beforeResolve((to, from, next) => {
  document.title = [to?.meta?.title, 'Nazhua配置生成器'].filter((i) => i).join(' - ');
  next();
});

export default router;
