const getters = {
  amountOfPages(state, getters) {
    return Math.ceil(getters.lengthOfAllTodos / 10);
  },
  getActivePage(state) {
    return state.activePage;
  },
  pageList(state, getters) {
    const pages = Array(getters.amountOfPages)
      .fill(0)
      .map((_, index) => index);

    if (getters.amountOfPages <= 5) {
      return pages;
    }
    if (getters.getActivePage - 2 <= 0) {
      return pages.slice(0, 5);
    } else if (getters.getActivePage + 1 >= pages.length) {
      return pages.slice(pages.length - 5, pages.length);
    }
    return pages.slice(getters.getActivePage - 2, getters.getActivePage + 3);
  }
};

const mutations = {
  setActivePage(state, page) {
    state.activePage = page;
  }
};

export default {
  state: {
    activePage: 0
  },
  getters,
  mutations
};
