import {
  createStore,
} from 'vuex';

const localTheme = localStorage.getItem('theme');

const defaultState = () => ({
  init: false,
  v1CustomCode: localStorage.getItem('nezha-generator-v1CustomCode') === '1',
  isDarkMode: localTheme ? localTheme === 'dark' : true,
});

const store = createStore({
  state: defaultState(),
  mutations: {
    SET_V1_CUSTOM_CODE(state, v1CustomCode) {
      state.v1CustomCode = v1CustomCode;
      localStorage.setItem('nezha-generator-v1CustomCode', v1CustomCode ? '1' : '0');
    },
    SET_IS_DARK_MODE(state, isDarkMode) {
      state.isDarkMode = isDarkMode;
      if (isDarkMode) {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', 'light');
      }
    },
  },
  actions: {
    toggleDarkMode({
      commit,
      state,
    }) {
      document.documentElement.classList.toggle('dark');
      commit('SET_IS_DARK_MODE', !state.isDarkMode);
    },
  },
});

export default store;
