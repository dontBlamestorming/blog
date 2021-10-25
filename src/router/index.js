import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "layouts-default-index" */ "../layouts/default/Index"
      ),
    children: [
      {
        path: "/",
        name: "PostListView",
        component: () =>
          import(
            /* webpackChunkName: "post-list-view" */ "../views/PostListView"
          ),
      },
      {
        path: ":category/post/:post_id",
        name: "PostView",
        component: () =>
          import(/* webpackChunkName: "post-view" */ "../views/PostView"),
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
