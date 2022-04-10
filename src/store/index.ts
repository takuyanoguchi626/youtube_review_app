import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import axios from "axios";
import { Account } from "@/types/Account";
import { Videos } from "@/types/Videos";
import { Channels } from "@/types/Channels";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //急上昇動画の一覧
    soaringVideos: Array<Videos>(),
    // 急上昇動画の50位までのチャンネル情報
    youtubersInfo: Array<Channels>(),
    //ログインしているアカウントのID
    currentUserId: 0,
    //APIKeyの一覧
    apiKey: Array<string>(
      // "AIzaSyD0gPqZj2y8L2QVei5d4NUMsthKN3ltr1c",
      // "AIzaSyAzfoPPbpueXEcQypbLRLXXNCz5JQFDtlc",
      // "AIzaSyDH4tzh3tFM5Ok8Q5jSpPHxpcQZMnK4U9M",
      // "AIzaSyBOMUoWdabc9lzK4XQFop3x0dYtUeI6agU",
      // "AIzaSyAgRYbghnEpgHX9f980fKCzlTP6vESPkwo",
      // "AIzaSyByE-aaIhWOBWxX0MdlUN6szX6qMe7kX5s",
      "AIzaSyAjmyhCg__LtgHseTa_w2NzZGdD_YLoVZY", //masamura
      // "AIzaSyDgB9MCfZvVqjzt_psZxNqxmdv06AJXDNg",
      "AIzaSyD1hsARhNyLS07rUwz6fqrVp2pWnGvkWTQ", //kawabata
      "AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU",
      "AIzaSyBaI5sqV11bUD-EzLC_lRmHBQztOctDwOc" //noguchi
    ),
  },
  actions: {
    /**
     * 急上昇動画をWebAPIから取得してmutationを呼び出す.
     * @param context コンテキスト
     */
    async getSoaringVideos(context) {
      const keys = context.getters.getApiKey;
      for (const key of keys) {
        try {
          const responce = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=JP&maxResults=50&key=${key}`
          );
          const payload = responce.data.items;
          const youtuberArray = [];
          for (let i = 0; i <= 49; i++) {
            const responce2 = await axios.get(
              `https://www.googleapis.com/youtube/v3/channels?key=${key}&part=snippet,contentDetails,statistics,status&id=${payload[i].snippet.channelId}`
            );
            youtuberArray.push(responce2.data.items[0]);
          }
          const payload2 = youtuberArray;
          context.commit("showSoaringVideos", payload);
          context.commit("showYoutubersInfo", payload2);
          return;
        } catch (e) {
          console.log("APIerror");
        }
      }
    },
  },
  mutations: {
    /**
     * 急上昇動画をステートに格納する.
     * @param state - ステート
     * @param payload - ペイロード
     */
    showSoaringVideos(state, payload) {
      state.soaringVideos = new Array<Videos>();
      for (const soaringVideo of payload) {
        state.soaringVideos.push(
          new Videos(
            soaringVideo.id,
            soaringVideo.snippet.publishedAt,
            soaringVideo.snippet.title,
            soaringVideo.snippet.description,
            soaringVideo.snippet.thumbnails.high.url,
            soaringVideo.snippet.channelTitle,
            soaringVideo.statistics.viewCount
          )
        );
      }
    },
    /**
     * 急上昇動画の50位までのチャンネル情報をステートに格納する.
     *
     * @param state - ステート
     * @param payload - 急上昇動画の50位までのチャンネル情報
     */
    showYoutubersInfo(state, payload) {
      state.youtubersInfo = new Array<Channels>();
      for (const youtuberInfo of payload) {
        state.youtubersInfo.push(
          new Channels(
            youtuberInfo.id,
            youtuberInfo.snippet.title,
            youtuberInfo.snippet.description,
            youtuberInfo.snippet.publishedAt,
            youtuberInfo.snippet.thumbnails.high.url,
            youtuberInfo.statistics.viewCount,
            youtuberInfo.statistics.subscriberCount,
            youtuberInfo.statistics.videoCount
          )
        );
      }
    },
    /**
     * ログインしたユーザー情報をstateに保存する.
     *
     * @param state - ステート
     * @param payload - ペイロード
     */
    addCurrentUserId(state, payload) {
      state.currentUserId = payload.id;
    },
    /**
     * ステートのカレントユーザーIDを０にするログアウト処理.
     * @param state - ステート
     */
    removeUser(state) {
      state.currentUserId = 0;
    },
  },
  modules: {},
  getters: {
    /**
     * 急上昇動画を返す.
     * @param state - ステート
     * @returns 急上昇動画
     */
    getSoaringVideosInfo(state) {
      return state.soaringVideos;
    },
    /**
     * 急上昇動画の50位までのチャンネル情報を返す.
     * @param state - ステート
     * @returns 急上昇動画の50位までのチャンネル情報
     */
    getYoutubersInfo(state) {
      return state.youtubersInfo;
    },
    /**
     *
     *
     * @param state
     * @returns
     */
    getCurrentUserId(state) {
      return state.currentUserId;
    },
    /**
     *
     *
     * @param state
     * @returns
     */
    getMyAccountFlag(state) {
      return (account: Account) => {
        return state.currentUserId === account.id;
      };
    },
    /**
     * APIキー配列を取得.
     * @param state - ステート
     * @returns APIキー
     */
    getApiKey(state) {
      return state.apiKey;
    },
  },
  plugins: [
    createPersistedState({
      // ストレージのキーを指定
      key: "youtube_review_app",
      paths: ["currentUserId"],
      // ストレージの種類を指定
      storage: window.sessionStorage,
    }),
  ],
});
