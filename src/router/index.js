import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DefaultLayout",
    component: () =>
      import(
        /* webpackChunkName: "layouts-default-index" */ "@/layouts/default/Index"
      ),
    children: [
      {
        path: "/", // cant use same name for root
        name: "View",
        component: () => import(/* webpackChunkName: "home" */ "../views/View"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
