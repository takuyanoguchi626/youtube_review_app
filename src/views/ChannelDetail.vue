<template>
  <div class="container">
    <div class="youtuber item col card white">
      <img class="img1" :src="currentChannel.thumbnailsUrl" />
      <div class="channel-title">{{ currentChannel.title }}</div>
      <p>
        {{ currentChannel.description }}
      </p>
      <span>総再生回数：{{ currentChannel.formatViewCount }}回 /</span
      ><span>
        チャンネル登録者数：{{ currentChannel.formatSubscriberCount }}人</span
      >
    </div>

    <div class="videos">
      <div
        v-for="videoDetail of videoArr"
        :key="videoDetail.id"
        class="item col card white video-card"
      >
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
  private apiKey = "AIzaSyD2e2JFujvHZWeu7dLwDveF64Nak97Agag";

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
  overflow-y: auto;
  height: 700px;
}
</style>
