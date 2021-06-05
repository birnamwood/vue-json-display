import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/log",
    name: "Log",
    component: () => import(/* webpackChunkName: "about" */ "../views/Log.vue"),
  },
  {
    path: "/weather",
    name: "weather",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Weather.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
