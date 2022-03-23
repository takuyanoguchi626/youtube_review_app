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
    // Youtuber情報
    youtubersInfo: Array<Channels>(),
    accountList: [
      new Account(
        3,
        "鈴木太郎",
        "aaaa",
        "/img/pagu.jpg",
        "aaaa",
        "ssss",
        "aaaaa",
        [new Channels("id", "ddd", "ddd", "sss", "/img/pagu.jpg", 1, 1, 1)],
        [
          new Review(
            1,
            1,
            new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
            "レビューのプレビュー",
            1
          ),
          new Review(
            1,
            1,
            new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
            "レビューのプレビュー",
            1
          ),
          new Review(
            1,
            1,
            new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
            "レビューのプレビュー",
            1
          ),
          new Review(
            1,
            1,
            new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
            "レビューのプレビュー",
            1
          ),
        ]
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
    /**
     * 急上昇動画をWebAPIから取得してmutationを呼び出す.
     * @param context コンテキスト
     */
    async getSoaringVideos(context) {
      const key = "AIzaSyD1hsARhNyLS07rUwz6fqrVp2pWnGvkWTQ";
      const responce = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=JP&key=${key}`
      );
      const payload = responce.data.items;
      context.commit("showSoaringVideos", payload);
    },
    /**
     * Youtuberの情報ををWebAPIから取得してmutationを呼び出す.
     * @param context コンテキスト
     */
    // async getYoutubersInfo(context) {
    //   const key = "AIzaSyD1hsARhNyLS07rUwz6fqrVp2pWnGvkWTQ";
    //   // 1~50
    //   const responce = await axios.get(
    //     `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=${key}`
    //   );
    //   const nextPageToken = responce.data.nextPageToken;
    //   // 51~100
    //   const responce2 = await axios.get(
    //     `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=${key}&pageToken=${nextPageToken}`
    //   );
    //   const nextPageToken2 = responce2.data.nextPageToken;
    //   // 101~150
    //   const responce3 = await axios.get(
    //     `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=${key}&pageToken=${nextPageToken2}`
    //   );
    //   const nextPageToken3 = responce3.data.nextPageToken;
    //   // 151~200
    //   const responce4 = await axios.get(
    //     `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=${key}&pageToken=${nextPageToken3}`
    //   );
    //   const nextPageToken4 = responce4.data.nextPageToken;
    //   // 201~250
    //   const responce5 = await axios.get(
    //     `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=${key}&pageToken=${nextPageToken4}`
    //   );
    //   const nextPageToken5 = responce5.data.nextPageToken;
    //   // 251~300
    //   const responce6 = await axios.get(
    //     `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=${key}&pageToken=${nextPageToken5}`
    //   );
    //   const nextPageToken6 = responce6.data.nextPageToken;
    //   // 301~350
    //   const responce7 = await axios.get(
    //     `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=${key}&pageToken=${nextPageToken6}`
    //   );
    //   const nextPageToken7 = responce7.data.nextPageToken;
    //   // 351~400
    //   const responce8 = await axios.get(
    //     `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=${key}&pageToken=${nextPageToken7}`
    //   );
    //   const nextPageToken8 = responce8.data.nextPageToken;
    //   // 401~450
    //   const responce9 = await axios.get(
    //     `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=${key}&pageToken=${nextPageToken8}`
    //   );
    //   const nextPageToken9 = responce9.data.nextPageToken;
    //   // 451~500
    //   const responce10 = await axios.get(
    //     `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=${key}&pageToken=${nextPageToken9}`
    //   );

    //   // スプレッド構文を使用
    //   const prepayload = [
    //     ...responce.data.items,
    //     ...responce2.data.items,
    //     ...responce3.data.items,
    //     ...responce4.data.items,
    //     ...responce5.data.items,
    //     ...responce6.data.items,
    //     ...responce7.data.items,
    //     ...responce8.data.items,
    //     ...responce9.data.items,
    //     ...responce10.data.items,
    //   ];
    //   const youtubeArray = new Array<Channels>();
    //   for (let i = 0; i <= 500; i++) {
    //     const prepayload2 = await axios.get(
    //       `https://www.googleapis.com/youtube/v3/channels?key=${key}&part=snippet,contentDetails,statistics,status&id=${prepayload[i].snippet.channelId}`
    //     );
    //     // console.dir("prepayload2:" + JSON.stringify(prepayload2));
    //     const payload = prepayload2.data.items;
    //     youtubeArray.push(payload);
    //   }
    //   console.log("call");
    //   context.commit("showYoutubersInfo", youtubeArray);
    // },
  },
  mutations: {
    /**
     * 急上昇動画を表示する.
     * @param state - ステート
     * @param payload - ペイロード
     */
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
            soaringVideo.snippet.thumbnailsUrl,
            soaringVideo.snippet.channelTitle,
            soaringVideo.snippet.tags
          )
        );
      }
    },
    /**
     * Youtuber情報を表示する.
     * @param state - ステート
     * @param payload - ペイロード
     */
    // showYoutubersInfo(state, payload) {
    //   state.youtubersInfo = new Array<Channels>();
    //   for (const youtuberInfo of payload) {
    //     state.youtubersInfo.push(
    //       new Channels(
    //         youtuberInfo.id,
    //         youtuberInfo.snippet.title,
    //         youtuberInfo.snippet.description,
    //         youtuberInfo.snippet.publishedAt,
    //         youtuberInfo.snippet.thumbnails.medium.url,
    //         youtuberInfo.statistics.viewCount,
    //         youtuberInfo.statistics.subscriberCount,
    //         youtuberInfo.statistics.videoCount
    //       )
    //     );
    //   }
    // },
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
    },

    changeSelfIntroduction(state, payload) {
      const account = state.accountList.find(
        (account) => account.id === payload.id
      );
      for (let i = 0; i < state.accountList.length; i++) {
        if (state.accountList[i].id === payload.id) {
          state.accountList.splice(i, 1);
        }
      }
      if (account !== undefined) {
        account.name = payload.name;
        account.introduction = payload.introduction;
        state.accountList.push(account);
      }
    },
  },
  modules: {},
  getters: {
    /**
     * Youtuber情報を返す.
     * @param state - ステート
     * @returns Youtuber情報
     */
    // getYoutubersInfo(state) {
    //   return () => {
    //     return state.youtubersInfo.filter(
    //       (youtuberInfo) => Number(youtuberInfo.subscriberCount) >= 1000000
    //     );
    //   };
    // },
    /**
     * 急上昇動画を返す.
     * @param state - ステート
     * @returns 急上昇動画
     */
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
