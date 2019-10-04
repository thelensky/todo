import Vue from 'vue';
import Vuex from 'vuex';
import todos from './Todos';
import page from './Page';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    page
  }
});
