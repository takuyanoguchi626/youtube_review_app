import { Account } from "@/types/Account";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accountList: new Array<Account>(),
  },
  mutations: {},
  actions: {},
  getters: {
    getAccountList(state) {
      return state.accountList;
    },
  },
  modules: {},
});
