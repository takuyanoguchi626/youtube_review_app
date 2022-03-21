import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Account } from "@/types/Account";
import { Videos } from "@/types/Videos";
import { Channels } from "@/types/Channels";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accountList: new Array<Account>(),
    // 急上昇動画
    soaringVideos: Array<Videos>(),
    // Youtuber情報
    youtubersInfo: Array<Channels>(),
  },
  actions: {
    /**
     * 急上昇動画をWebAPIから取得してmutationを呼び出す.
     * @param context コンテキスト
     */
    async getSoaringVideos(context) {
      const responce = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=JP&key=AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU"
      );
      console.dir("responce:" + JSON.stringify(responce));
      const payload = responce.data.items;
      context.commit("showSoaringVideos", payload);
    },
    /**
     * Youtuberの情報ををWebAPIから取得してmutationを呼び出す.
     * @param context コンテキスト
     */
    async getYoutubersInfo(context) {
      // 1~50
      const responce = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU"
      );
      console.dir("responce:" + JSON.stringify(responce));
      const nextPageToken = responce.data.nextPageToken;
      // 51~100
      const responce2 = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU&pageToken=${nextPageToken}`
      );
      console.dir("responce2:" + JSON.stringify(responce2));
      const nextPageToken2 = responce2.data.nextPageToken;
      // 101~150
      const responce3 = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU&pageToken=${nextPageToken2}`
      );
      console.dir("responce3:" + JSON.stringify(responce3));
      const nextPageToken3 = responce3.data.nextPageToken;
      // 151~200
      const responce4 = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU&pageToken=${nextPageToken3}`
      );
      console.dir("responce4:" + JSON.stringify(responce4));
      const nextPageToken4 = responce4.data.nextPageToken;
      // 201~250
      const responce5 = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU&pageToken=${nextPageToken4}`
      );
      console.dir("responce5:" + JSON.stringify(responce5));
      const nextPageToken5 = responce5.data.nextPageToken;
      // 251~300
      const responce6 = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU&pageToken=${nextPageToken5}`
      );
      console.dir("responce6:" + JSON.stringify(responce6));
      const nextPageToken6 = responce6.data.nextPageToken;
      // 301~350
      const responce7 = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU&pageToken=${nextPageToken6}`
      );
      console.dir("responce7:" + JSON.stringify(responce7));
      const nextPageToken7 = responce7.data.nextPageToken;
      // 351~400
      const responce8 = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU&pageToken=${nextPageToken7}`
      );
      console.dir("responce8:" + JSON.stringify(responce8));
      const nextPageToken8 = responce8.data.nextPageToken;
      // 401~450
      const responce9 = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU&pageToken=${nextPageToken8}`
      );
      console.dir("responce9:" + JSON.stringify(responce9));
      const nextPageToken9 = responce9.data.nextPageToken;
      // 451~500
      const responce10 = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU&pageToken=${nextPageToken9}`
      );
      console.dir("responce10:" + JSON.stringify(responce10));

      const payload = responce.data.items;
      // responce2.data.items +
      // responce3.data.items +
      // responce4.data.items +
      // responce5.data.items +
      // responce6.data.items +
      // responce7.data.items +
      // responce8.data.items +
      // responce9.data.items +
      // responce10.data.items;
      context.commit("showYoutubersInfo", payload);
    },
  },
  mutations: {
    /**
     * 急上昇動画を表示する.
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
            soaringVideo.snippetthumbnailsUrl,
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

    showYoutubersInfo(state, payload) {
      console.log(payload);
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
    getAccountList(state) {
      return state.accountList;
    },
  },
});
