import {db} from '../db.js'

const TABLE = 'todos';

const getters = {
  listTodos(state, getters) {
    const reversed = state.todos;
    const paged = [],
      todoOnPage = 10,
      length = reversed.length;
    for (let i = 0; i < length; i += todoOnPage) {
      paged.push(reversed.slice(i, i + todoOnPage));
    }
    return paged[getters.getActivePage];
  },
  lengthOfAllTodos(state) {
    return state.todos.length;
  },
  getTodo(state) {
    return id => state.todos.find(record => record.id === id);
  },
};

const mutations = {
  addBulk(state, records) {
    state.todos = records.reverse();
  },
  recordAdd(state, record) {
    state.todos.unshift(record);
  },
  recordUpdate(state, record) {
    const index = state.todos.findIndex(rec =>
      record.id === rec.id
    );
    if (index > -1) {
      state.todos.splice(index, 1, record)
    }
  },
  recordDelete(state, record) {
    const index = state.todos.findIndex(rec =>
      record.id === rec.id
    );
    if (index > -1) {
      state.todos.splice(index, 1)
    }
  }
};

const actions = {
  fetchTodos({commit}) {
    commit('setLoading', true);
    db.collection(TABLE)
      .orderBy('timestamp')
      .get()
      .then(querySnapshot => {
        const length = querySnapshot.docs.length;
        const documents = querySnapshot.docs.map((doc, i) => {
          return {
            ...doc.data(),
            id: doc.id,
            index: (length - i)
          }
        });
        commit('addBulk', documents);
        commit('setLoading', false);
      })
  },
  createRecord({commit, dispatch}, task) {
    db.collection(TABLE)
      .add(task)
      .then(() => {
        commit('recordAdd', task)
      })
      .then(() => {
        dispatch('fetchTodos');
      })
  },
  deleteRecord({commit}, task) {
    db.collection(TABLE)
      .doc(task.id)
      .delete()
      .then(() => {
        commit('recordDelete', task)
      })
  },
  updateRecord({commit}, task) {
    db.collection(TABLE)
      .doc(task.id)
      .set(task)
      .then(() => {
        commit('recordUpdate', task)
      })
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
