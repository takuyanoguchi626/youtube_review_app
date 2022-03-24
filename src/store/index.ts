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
    //最後のレビューID
    lastReviewId: 0,
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
            "",
            1,
            1,
            new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
            "レビューのプレビュー",
            1
          ),
          new Review(
            "",
            1,
            1,
            new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
            "レビューのプレビュー",
            1
          ),
          new Review(
            "",
            1,
            1,
            new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
            "レビューのプレビュー",
            1
          ),
          new Review(
            "",
            1,
            1,
            new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
            "レビューのプレビュー",
            1
          ),
        ]
      ),
      new Account(
        3,
        "山田花子",
        "aaaa",
        "/img/pagu.jpg",
        "aaaa",
        "ssss",
        "aaaaa",
        [new Channels("id", "ddd", "ddd", "sss", "/img/pagu.jpg", 1, 1, 1)],
        [
          new Review(
            "",
            1,
            1,
            new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
            "レビューのプレビュー",
            1
          ),
          new Review(
            "",
            1,
            1,
            new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
            "レビューのプレビュー",
            1
          ),
        ]
      ),
      new Account(
        3,
        "佐藤次郎",
        "aaaa",
        "/img/pagu.jpg",
        "aaaa",
        "ssss",
        "aaaaa",
        [new Channels("id", "ddd", "ddd", "sss", "/img/pagu.jpg", 1, 1, 1)],
        [
          new Review(
            "",
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
          "",
          1,
          1,
          new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
          "レビューのプレビュー",
          1
        ),
        new Review(
          "",
          1,
          1,
          new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
          "レビューのプレビュー",
          1
        ),
        new Review(
          "",
          1,
          1,
          new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
          "レビューのプレビュー",
          1
        ),
        new Review(
          "",
          1,
          1,
          new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss"),
          "レビューのプレビュー",
          1
        ),
      ]
    ),
    searchData: [],
  },
  actions: {
    /**
     * 急上昇動画をWebAPIから取得してmutationを呼び出す.
     * @param context コンテキスト
     */
    async getSoaringVideos(context) {
      const key = "AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU";
      const responce = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=JP&maxResults=50&key=${key}`
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
    },
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
            soaringVideo.snippet.thumbnails.medium.url,
            soaringVideo.snippet.channelTitle,
            soaringVideo.snippet.tags
          )
        );
      }
    },
    showYoutubersInfo(state, payload) {
      state.youtubersInfo = new Array<Channels>();
      for (const youtuberInfo of payload) {
        state.youtubersInfo.push(
          new Channels(
            youtuberInfo.id,
            youtuberInfo.snippet.title,
            youtuberInfo.snippet.description,
            youtuberInfo.snippet.publishedAt,
            youtuberInfo.snippet.thumbnails.medium.url,
            youtuberInfo.statistics.viewCount,
            youtuberInfo.statistics.subscriberCount,
            youtuberInfo.statistics.videoCount
          )
        );
      }
    },
    addCurrentUser(state, payload) {
      state.currentUser = payload;
    },

    addSearchData(state, payload) {
      state.searchData = payload;
      console.dir(JSON.stringify(state.searchData));
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

    sortByReviewCount(state) {
      state.accountList.sort(function (before: Account, after: Account) {
        //ある順序の基準において a が b より小
        if (after.reviewList.length < before.reviewList.length) {
          return -1;
        }
        //その順序の基準において a が b より大
        if (after.reviewList.length > before.reviewList.length) {
          return 1;
        }
        // a と b が等しい場合
        return 0;
      });
    },
    postReview(state, payload) {
      const account = state.accountList.find(
        (account) => account.id === state.currentUser.id
      );
      for (let i = 0; i < state.accountList.length; i++) {
        if (state.accountList[i].id === state.currentUser.id) {
          state.accountList.splice(i, 1);
        }
      }
      if (account !== undefined) {
        account.reviewList.push(
          new Review(
            payload.date,
            state.lastReviewId,
            account.id,
            payload.video,
            payload.review,
            0
          )
        );
        state.lastReviewId++;
        console.log(account);

        state.accountList.push(account);
        console.log("sss");
      }
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
