import {
  createStore,
} from 'vuex';

const defaultState = () => ({
  init: false,
});

const store = createStore({
  state: defaultState(),
  mutations: {
  },
  actions: {
  },
});

export default store;
