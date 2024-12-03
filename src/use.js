import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'highlight.js/styles/monokai.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import 'remixicon/fonts/remixicon.css';
import './assets/scss/base.scss';
import router from './router';
import store from './store';

hljs.registerLanguage('javascript', javascript);

export default (app) => {
  app.use(ElementPlus, {
    locale: zhCn,
  });
  app.use(hljsVuePlugin);
  app.use(router);
  app.use(store);
};
