import '@babel/polyfill';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from './router';
import './registerServiceWorker';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


// Code for the SPA spinner, wh

import "@/style/debug-logo-animation.scss";

const testRequireEnsureLink = document.querySelector('.test-require-ensure');
const logos = global.document.querySelectorAll('.fidget-spinner');

testRequireEnsureLink.addEventListener('click', () => {
  console.log('testRequireEnsureLink');
  // the following won't be included in the original build but
  // will be lazy loaded only when needed
  import('./scripts/css-utils.js')
    .then(module => {
      const { toggleCssClassName } = module;
      toggleCssClassName(logos[0], 'rotate');
      toggleCssClassName(logos[1], 'rotate');
      toggleCssClassName(testRequireEnsureLink, 'active');
    })
    .catch(error => console.error('Chunk loading failed', error));
});

