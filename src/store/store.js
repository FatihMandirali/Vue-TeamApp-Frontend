import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
import products from "./products";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    users:[]
  },
  getters,
  mutations,
  actions,
  modules : {
    products
  }
});