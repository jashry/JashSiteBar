import Vue from "vue";
import Vuex from "vuex";
import Store from "./store/store";
import VueRouter from "vue-router";

import App from "./App.vue";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Me from "./pages/Me";
import Article from "./pages/Article";
import Nav from "./components/Navs";

Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    components: {
      default: Home,
      nav: Nav
    }
  },
  {
    path: "/Article",
    components: {
      default: Article,
      nav: Nav
    }
  },
  {
    path: "/Me",
    components: {
      default: Me,
      nav: Nav
    }
  },
  {
    path: "/Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  Store,
  render: h => h(App)
}).$mount("#app");
