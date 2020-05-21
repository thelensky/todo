import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage";
import EditRecord from "../components/EditRecord";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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

export default router;
