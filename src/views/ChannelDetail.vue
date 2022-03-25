<template>
  <div class="container">
    <div class="youtuber">
      <div>{{ currentChannel.title }}</div>
      <img :src="currentChannel.thumbnailsUrl" />
      <p>
        {{ currentChannel.description }}
      </p>
      <span>総再生回数：{{ currentChannel.videoCount }} /</span
      ><span> チャンネル登録者数：{{ currentChannel.subscriberCount }}人</span>
    </div>
    <!-- <iframe
      width="560"
      height="315"
      v-bind:src="'https://www.youtube.com/embed/' + video.id"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe> -->
    <div class="videos">
      <div v-for="videoDetail of videoArr" :key="videoDetail.id">
        <router-link :to="'/videoDetail/' + videoDetail.id"
          ><img :src="videoDetail.thumbnailsUrl"
        /></router-link>
        <div>
          {{ videoDetail.title }}
        </div>
        <span>{{ videoDetail.publishedAt }}</span>
        <span>{{ videoDetail.description }}</span>
        <span>{{ videoDetail.channelTitle }}</span>
        <span>{{ videoDetail.tags }}</span>
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
  private apiKey = "AIzaSyD1hsARhNyLS07rUwz6fqrVp2pWnGvkWTQ";

  async created(): Promise<void> {
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
      items.snippet.thumbnails.medium.url,
      items.statistics.viewCount,
      items.statistics.subscriberCount,
      items.statistics.videoCount
    );
    console.log(this.currentChannel);
    const responseVideo = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&channelId=${this.currentChannel.id}&maxResults=10&regionCode=JP&key=${this.apiKey}&order=date`
    );
    console.dir(JSON.stringify(responseVideo));
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
          videoDetailItems.snippet.thumbnails.medium.url,
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
img {
  width: 500px;
  height: 300px;
  object-fit: cover;
}
</style>
