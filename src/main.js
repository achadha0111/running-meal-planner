import Vue from 'vue'
import VueMaterial from "vue-material";
import App from './App.vue'
import VueRouter from "vue-router";
import router from "./router";
import VueSimpleAlert from "vue-simple-alert";

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueSimpleAlert);

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app');
