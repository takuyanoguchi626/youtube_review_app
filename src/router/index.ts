import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
