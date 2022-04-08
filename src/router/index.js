import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/home/Home.vue";
import Login from "../components/login/Login.vue";
import SignUp from "../components/sign-up/SignUp.vue";
import Friends from "../components/friends/Friends.vue";
import ProfileView from "../components/profile/ProfileView.vue";
import EditProfileView from "../components/profile/EditProfileView.vue";
import { getAuth } from "firebase/auth";

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
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: EditProfileView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends,
    meta: {
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let user = getAuth().currentUser;
  let authorization = to.matched.some(record => record.meta.requiresAuth)

  if (authorization && !user){
    next("/")
  }else if (!authorization && user){
    next("/home")
  }else {
    next()
  }

})



export default router;