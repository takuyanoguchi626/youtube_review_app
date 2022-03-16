import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/iconChange",
    name: "",
    component: () => import("../views/IconChange.vue"),
  },
  {
    path: "/registerUser",
    component: () => import("../views/RegisterUser.vue"),
  },
  {
    path: "/youtuberDetail",
    component: () => import("../views/YoutuberDetail.vue"),
  },
  {
    path: "/videoDetail",
    component: () => import("../views/VideoDetail.vue"),
  },
  {
    path: "/top",
    component: () => import("../views/Top.vue"),
  },
  {
    path: "/myProfile",
    name: "",
    component: () => import("../views/MyProfile.vue"),
  },
  {
    path: "/selfIntroductionChange",
    name: "",
    component: () => import("../views/SelfIntroductionChange.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
