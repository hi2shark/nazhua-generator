import {
  createStore,
} from 'vuex';

const defaultState = () => ({
  init: false,
  v1CustomCode: localStorage.getItem('nezha-generator-v1CustomCode') === '1',
});

const store = createStore({
  state: defaultState(),
  mutations: {
    SET_V1_CUSTOM_CODE(state, v1CustomCode) {
      state.v1CustomCode = v1CustomCode;
      localStorage.setItem('nezha-generator-v1CustomCode', v1CustomCode ? '1' : '0');
    },
  },
  actions: {
  },
});

export default store;
