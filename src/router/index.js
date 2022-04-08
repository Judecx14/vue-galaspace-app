import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/home/Home.vue";
import Login from "../components/login/Login.vue";
import SignUp from "../components/sign-up/SignUp.vue";
import Friends from "../components/friends/Friends.vue";
import ProfileView from "../components/profile/ProfileView.vue";

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
    path: "/profile",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;