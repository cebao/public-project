import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import {base_url,router_mode} from "@/util/const";
import vuetify from './plugins/vuetify';

Vue.use(Router)

Vue.config.productionTip = false

window._bbxApp =new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
