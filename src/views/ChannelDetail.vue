<template>
  <div class="container">
    <div class="youtuber item col card white">
      <img class="img1" :src="currentChannel.thumbnailsUrl" />
      <div class="channel-title">{{ currentChannel.title }}</div>
      <button class="btn" type="button" v-on:click="showDescription">
        概要欄をcheck！
      </button>
      <div class="channel-description" v-if="flag">
        {{ currentChannel.description }}
      </div>
      <hr />
      <div class="counts">
        <span>総再生回数：{{ currentChannel.formatViewCount }}回</span><br />
        <span>
          チャンネル登録者数：{{ currentChannel.formatSubscriberCount }}人</span
        >
      </div>
      <a
        class="waves-effect waves-light btn favorite"
        v-on:click="favoriteChannel()"
        ><i class="material-icons left">star_border</i>お気に入り</a
      >
    </div>

    <div class="videos item col card white video-card">
      <div v-for="videoDetail of videoArr" :key="videoDetail.id">
        <router-link :to="'/videoDetail/' + videoDetail.id"
          ><img class="img2" :src="videoDetail.thumbnailsUrl"
        /></router-link>
        <div class="video-title">
          {{ videoDetail.title }}
        </div>
        <!-- <span>{{ videoDetail.tags }}</span
        ><br /> -->
        <span>投稿日：{{ videoDetail.formatPublishedAt }}</span
        ><br />
        <span>{{ videoDetail.description }}</span>
        <hr />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Channels } from "@/types/Channels";
import { Videos } from "@/types/Videos";
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private currentChannel = new Channels("", "", "", "", "", 1, 1, 1);
  private videoArr = new Array<Videos>();
  private flag = false;
  private apiKey = this.$store.getters.getApiKey;
  async created(): Promise<void> {
    // スクロールトップボタン
    scrollTop(1); // 遅すぎるとガクガクになるので注意

    function scrollTop(duration: number) {
      let currentY = window.pageYOffset; // 現在のスクロール位置を取得
      let step = duration / currentY > 1 ? 10 : 100; // 三項演算子
      let timeStep = (duration / currentY) * step; // スクロール時間
      let intervalId = setInterval(scrollUp, timeStep);
      // timeStepの間隔でscrollUpを繰り返す。
      // clearItervalのために返り値intervalIdを定義する。

      function scrollUp() {
        currentY = window.pageYOffset;
        if (currentY === 0) {
          clearInterval(intervalId); // ページ最上部に来たら終了
        } else {
          scrollBy(0, -step); // step分上へスクロール
        }
      }
    }

    const channelId = this.$route.params.id;
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${this.apiKey}&part=snippet,contentDetails,statistics,status`
    );
    const items = response.data.items[0];
    this.currentChannel = new Channels(
      items.id,
      items.snippet.title,
      items.snippet.description,
      items.snippet.publishedAt,
      items.snippet.thumbnails.high.url,
      items.statistics.viewCount,
      items.statistics.subscriberCount,
      items.statistics.videoCount
    );
    const responseVideo = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&channelId=${this.currentChannel.id}&maxResults=10&regionCode=JP&key=${this.apiKey}&order=date`
    );
    const videoItems = responseVideo.data.items;
    for (const videoitem of videoItems) {
      const responceVideoDetail = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoitem.id.videoId}&part=snippet,statistics&regionCode=JP&key=${this.apiKey}`
      );
      const videoDetailItems = responceVideoDetail.data.items[0];
      this.videoArr.push(
        new Videos(
          videoDetailItems.id,
          videoDetailItems.snippet.publishedAt,
          videoDetailItems.snippet.title,
          videoDetailItems.snippet.description,
          videoDetailItems.snippet.thumbnails.high.url,
          videoDetailItems.snippet.channelTitle,
          videoDetailItems.snippet.tags,
          videoDetailItems.statistics.videoCount
        )
      );
    }
    // 概要欄がない場合の処理
    if (this.currentChannel.description === "") {
      this.currentChannel.description =
        "このYoutuberの概要欄は見つかりませんでした";
    }
  }
  /**
   * 概要欄を表示する.
   */
  showDescription(): void {
    this.flag = true;
  }
  /**
   * チャンネル情報をfavoriteListに入れる.
   */
  favoriteChannel(): void {
    this.$store.commit("addChannelData", this.currentChannel);
    console.log(this.$store.state.accountList);
  }
}
</script>

<style scoped>
.container {
  display: flex;
}
.img1 {
  width: 30vw;
  height: auto;
  object-fit: cover;
}
.channel-title {
  font-weight: bold;
  font-size: 30px;
}
.youtuber {
  overflow-wrap: break-word;
  margin-top: 0;
  margin-right: 30px;
  width: 50%;
  padding: 10px;
  height: 840px;
}
.video-title {
  font-weight: bold;
}
.video-card {
  margin-top: 0;
  overflow-x: auto;
}
.img2 {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.img2:hover {
  opacity: 0.7;
  transition-duration: 0.3s;
}
.videos {
  overflow-x: auto;
  height: 700px;
}
.channel-description {
  margin-top: 5px;
  height: 22%;
  overflow-x: auto;
}
.counts {
  margin-top: 20px;
}
.favorite {
  margin-top: 5px;
}
</style>
