import { createRouter, createWebHistory } from "@ionic/vue-router";
import store from "../store/index";

const rediretToHomeIfLoggedIn = (to, from, next) => {
  if (store.state.auth.loggedIn) next({ name: "home" });
  else next();
};

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => require("../views/Home"),
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.loggedIn) next({ name: "accounts-login" });
      else next();
    },
  },
  {
    path: "/accounts/forgot",
    name: "accounts-forgot",
    component: () => require("../views/accounts/Forgot"),
    beforeEnter: rediretToHomeIfLoggedIn,
  },
  {
    path: "/accounts/reset",
    name: "accounts-reset",
    component: () => require("../views/accounts/Reset"),
    beforeEnter: rediretToHomeIfLoggedIn,
  },
  {
    path: "/accounts/login",
    name: "accounts-login",
    component: () => require("../views/accounts/Login"),
    beforeEnter: rediretToHomeIfLoggedIn,
  },
  {
    path: "/accounts/signup",
    name: "accounts-signup",
    component: () => require("../views/accounts/Signup"),
    beforeEnter: rediretToHomeIfLoggedIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.auth.loggedIn)
    next({ name: "accounts-login" });
  else next();
});

export default router;
