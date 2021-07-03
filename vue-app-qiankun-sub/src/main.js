import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';

import './directives'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ElementUI);
Vue.use(ViewUI);

Vue.config.productionTip = false

let router = null;
let instance = null;

function render(props = {}) {
  const { container,name } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? name : '/',
    mode: 'history',
  });

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
