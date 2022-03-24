import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/iconChange/:id",
    name: "",
    component: () => import("../views/IconChange.vue"),
  },
  {
    path: "/registerUser",
    component: () => import("../views/RegisterUser.vue"),
  },
  {
    path: "/channelDetail/:id",
    component: () => import("../views/ChannelDetail.vue"),
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
    path: "/myProfile/:id",
    name: "",
    component: () => import("../views/MyProfile.vue"),
  },
  {
    path: "/selfIntroductionChange/:id",
    name: "",
    component: () => import("../views/SelfIntroductionChange.vue"),
  },
  {
    path: "/addReview",
    name: "",
    component: () => import("../components/AddReview.vue"),
  },
  {
    path: "/showReview/:id",
    name: "",
    component: () => import("../views/ShowReview.vue"),
  },
  {
    path: "/searchedList",
    name: "",
    component: () => import("../views/SearchedList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
