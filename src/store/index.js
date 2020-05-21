import Vue from 'vue';
import Vuex from 'vuex';
import todos from './todos';
import page from './page';
import loading from "./loading";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    page,
    loading
  }
});
