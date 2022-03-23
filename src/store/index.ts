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
        3,
        "鈴木太郎",
        "aaaa",
        "/img/pagu.jpg",
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
    changeAccountIcon(state, payload) {
      const account = state.accountList.find(
        (account) => account.id === payload.id
      );
      for (let i = 0; i < state.accountList.length; i++) {
        if (state.accountList[i].id === payload.id) {
          state.accountList.splice(i, 1);
        }
      }
      if (account !== undefined) {
        account.img = payload.img;
        state.accountList.push(account);
      }

      // const account = accountList.find((account) => {
      //   account.id === payload.id;
      // });
      // if (account !== undefined) {
      //   account.img = payload.img;
      // }
      // state.accountList = accountList;
      // console.log(state.accountList);
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
    getAccountById(state) {
      return (id: number) => {
        return state.accountList.filter((account) => account.id === id)[0];
      };
    },
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
});
