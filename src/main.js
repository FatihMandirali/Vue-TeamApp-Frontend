import Vue from 'vue'
import App from './App.vue'
import { router } from "./component/router";
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
