import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import store from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    /*  {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },*/
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages: string[] = ["login", "register"];
  const isLoggedIn = store.getters["authStore/isAuthenticated"];
  const routeName: string = to.name as string;
  if (!publicPages.includes(routeName) && !isLoggedIn) next({ name: "login" });
  console.log("isLoggedIn", isLoggedIn);
  next();
});

export default router;
