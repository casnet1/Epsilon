//import home from "./views/home.vue";
import landing from "./views/landing.vue";
import login from "./views/login"
import home from "./views/home"


export const routes = [
    { path: "/", component: landing, name: "/" },
    { path: "/landing", component: landing, name: "landing" },
    { path: "/home", component: home, name: "home" },
    { path: "/login", component: login, name: "login" },
  
]
