import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("../views/Top.vue"),
  },
  {
    path: "/top",
    component: () => import("../views/Top.vue"),
  },
  {
    path: "/registerUser",
    component: () => import("../views/RegisterUser.vue"),
  },
  {
    path: "/2registerUser/:id",
    component: () => import("../views/RegisterUser2.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/2login/:id",
    component: () => import("../views/Login2.vue"),
  },
  {
    path: "/iconChange/:id",
    component: () => import("../views/IconChange.vue"),
  },

  {
    path: "/channelDetail/:id",
    component: () => import("../views/ChannelDetail.vue"),
  },
  {
    path: "/videoDetail/:id",

    component: () => import("../views/VideoDetail.vue"),
  },
  {
    path: "/2searchedList/:searchText",
    component: () => import("../views/SearchedList2.vue"),
  },
  {
    path: "/searchedList/:searchText",
    component: () => import("../views/SearchedList.vue"),
  },
  {
    path: "/addReview/:id",
    component: () => import("../components/AddReview.vue"),
  },
  {
    path: "/showReview/:id",
    component: () => import("../views/ShowReview.vue"),
  },
  {
    path: "/editReview/:id",
    component: () => import("../views/EditReview.vue"),
  },
  {
    path: "/myProfile/:id",
    component: () => import("../views/MyProfile.vue"),
  },
  {
    path: "/iconChange/:id",
    component: () => import("../views/IconChange.vue"),
  },
  {
    path: "/selfIntroductionChange/:id",
    component: () => import("../views/SelfIntroductionChange.vue"),
  },
  {
    path: "/404",
    component: () => import("../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
