import Vue from "vue";
import Vuex from "vuex";
import { Account } from "@/types/Account";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    addUser(state, payload) {
      state.accountList.push(payload);
    },
  },
  actions: {},
  modules: {},
});
