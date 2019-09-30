import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//Paginas
import ClientPage from "./pages/ClientPage.vue";
import ServicePage from "./pages/ServicePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import HomePage from "./pages/HomePage.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/client", component: ClientPage },
    { path: "/about", component: AboutPage },
    { path: "/service", component: ServicePage },
];

const router = new VueRouter({
  mode: "history",
  hash: false,
  routes // short for `routes: routes`
});

export default router;
