import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//Components
import Login from "./components/Login.vue";
import PasswordReset from "./components/PasswordReset.vue";
import News from "./components/News.vue";
import NewsDetail from "./components/NewsDetail.vue";
import Videos from "./components/Videos.vue";

// const Logout = {
//   created(){
//     localStorage.clear();
//     this.$router.push('/login');
//   }
// }

const routes = [
    { path: "/news", component: News },
    { path: "/login", component: Login },
    { path: "/news/detail", component: NewsDetail },
    { path: "/password-reset", component: PasswordReset },
    { path: "/videos", component: Videos },
    // { path: '*', redirect: '/login' }, // catch all use case
];

const router = new VueRouter({
  mode: "history",
  hash: false,
  routes // short for `routes: routes`
});

export default router;
