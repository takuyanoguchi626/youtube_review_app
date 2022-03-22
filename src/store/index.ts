import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import { Account } from "@/types/Account";
import { Videos } from "@/types/Videos";
import { Channels } from "@/types/Channels";
import { Review } from "@/types/Review";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    accountList: [
      new Account(
        0,
        "鈴木太郎",
        "aaaa",
        "ssssss",
        "aaaa",
        "ssss",
        "aaaaa",
        new Array<Channels>(),
        new Array<Review>()
      ),
    ],
    soaringVideos: Array<Videos>(),
    currentUser: new Account(
      0,
      "",
      "",
      "",
      "",
      "",
      "",
      new Array<Channels>(),
      new Array<Review>()
    ),
  },
  actions: {
    async getSoaringVideos(context) {
      const responce = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=JP&key=AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU"
      );
      console.dir("responce:" + JSON.stringify(responce));
      const payload = responce.data.items;
      console.log(payload);
      context.commit("showSoaringVideos", payload);
    },
  },
  mutations: {
    addUser(state, payload) {
      state.accountList.push(payload);
    },
    showSoaringVideos(state, payload) {
      state.soaringVideos = new Array<Videos>();
      for (const soaringVideo of payload) {
        state.soaringVideos.push(
          new Videos(
            soaringVideo.id,
            soaringVideo.snippet.publishedAt,
            soaringVideo.snippet.title,
            soaringVideo.snippet.description,
            soaringVideo.snippetthumbnailsUrl,
            soaringVideo.snippet.channelTitle,
            soaringVideo.snippet.tags
          )
        );
      }
      console.log(state.soaringVideos);
    },
    addCurrentUser(state, payload) {
      state.currentUser = payload;
    },
  },
  modules: {},
  getters: {
    getSoaringVideosInfo(state) {
      return state.soaringVideos;
    },
    getAccountList(state) {
      return state.accountList;
    },
    getCurrentUser(state){
      return state.currentUser
    },
    getLoginAccount(state) {
      return state.loginAccount
    },
  },
});
