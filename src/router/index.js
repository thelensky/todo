import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage";
import EditRecord from "../components/EditRecord";
import store  from "../store";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/record"
  },
  {
    path: "/record",
    component: HomePage
  },
  {
    path: "/record/page/:active_page",
    component: HomePage
  },
  {
    path: '/record/:id',
    component: EditRecord
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeResolve((to, from, next) =>{
  // If this isn't an initial page load.
  if (to.name) {
    store.commit('setLoading', true);
  }
  if(to.params.active_page){
    console.log("got it");
    store.commit('setActivePage', to.params.active_page - 1)
  } else {
    store.commit('setActivePage', 0)
  }
  next();
});

router.afterEach((to, from, next) =>{
  store.commit('setLoading', false);
});

export default router;
