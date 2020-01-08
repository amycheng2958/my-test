import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
// 解决重复点击导航路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/admin",
    name: "admin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Admin.vue"),
    children: [
      {
        path: "/admin/course/:name",
        name: "detail",
        component: () => import("../views/Detail.vue")
      }
    ],
    meta: {
      auth: true
    }
  },
  {
    path: "/course/:name",
    component: () => import("../views/Detail.vue")
  },
  {
    path: "*",
    component: () => import("../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// 全局前置守卫
router.beforeEach((to, from, next) => {
    if(to.meta.auth) {
      // 是否登录
      if(window.isLogin) {
        next()
      }else {
        next('/login?redirect='+to.fullPath)
      }
    }else {
      next()
    }
})
export default router;
