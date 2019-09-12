import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//Paginas
import SocialPage from "./pages/SocialPage.vue";
import HomePage from "./pages/HomePage.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/social", component: SocialPage },
];

const router = new VueRouter({
  mode: "history",
  hash: false,
  routes // short for `routes: routes`
});

export default router;
