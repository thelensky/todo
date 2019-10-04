const DATA_KEY = 'todo-list';

const getters = {
  listTodos(state, getters) {
    const reversed = state.todos.slice(0).reverse();
    const paged = [],
      todoOnPage = 10,
      length = reversed.length;
    for (let i = 0; i < length; i += todoOnPage) {
      paged.push(reversed.slice(i, i + todoOnPage));
    }
    return paged[getters.getActivePage];
  },
  getTodoById(state) {
    return id => state.todo.find(todo => todo.id === id);
  },
  lengthOfAllTodos(state) {
    return state.todos.length;
  }
};

const mutations = {
  addTodo(state, todo) {
    state.todos = [...state.todos, todo];
  },
  addTodos(state, todos) {
    state.todos = [...state.todos, ...todos];
  },
  deleteTodo(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  changeComlitionTodo(state, id) {
    const indexTodo = state.todos.findIndex(todo => todo.id === id);
    state.todos[indexTodo].complite = !state.todos[indexTodo].complite;
  }
};

const actions = {
  fetchTodos({ commit }) {
    const saved = localStorage.getItem(DATA_KEY);
    if (saved) {
      const todos = JSON.parse(saved);
      console.log(typeof todos, todos);

      commit('addTodos', todos);
    }
  },
  saveToStorage({ state }) {
    localStorage.setItem(DATA_KEY, JSON.stringify(state.todos));
  }
};

export default {
  state: {
    todos: []
  },
  getters,
  mutations,
  actions
};
