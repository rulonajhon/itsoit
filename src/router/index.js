import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingView.vue";
import Login from "@/views/LoginView.vue";
import SignUp from "@/views/SignUp.vue";
import Home from "@/views/HomeView.vue";
import DisclaimerView from '@/views/DisclaimerView.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  { path: "/", redirect: "/landing" },
  { path: "/landing", component: LandingPage },
  { path: "/signup", component: SignUp },
  { path: "/login", component: Login },
  { path: '/disclaimer', component: DisclaimerView },
  { 
    path: "/home", 
    component: Home, 
    meta: { requiresAuth: true } 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation Guard for Protected Routes
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (to.meta.requiresAuth && !user) {
      next("/login");
    } else {
      next();
    }
  });
});

export default router;
