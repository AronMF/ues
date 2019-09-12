import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

