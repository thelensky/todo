const getters = {
  getLoading(state) {
    return state.loading;
  }
};

const mutations = {
  setLoading(state, flag) {
    return state.loading = flag;
  }
};


export default {
  state: {
    loading: false
  },
  getters,
  mutations
}