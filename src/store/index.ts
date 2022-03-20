import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Videos } from "@/types/Videos";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 急上昇動画
    soaringVideos: Array<Videos>(),
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
      console.log(payload);
      context.commit("showSoaringVideos", payload);
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
      console.log(state.soaringVideos);
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
  },
});
