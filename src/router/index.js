import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/home/Home.vue";
import Login from "../components/login/Login.vue";
import SignUp from "../components/sign-up/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;