<template>
  <div class="container">
    <div class="video">
      <iframe
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/' + videoDetail.id"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>{{ videoDetail.title }}</div>
      <div>
        動画投稿日：{{ videoDetail.formatPublishedAt }} / 再生回数：{{
          videoDetail.viewCount
        }}回
      </div>
      <br />
      <router-link :to="'/channelDetail/' + channelDetail.id">
        <img :src="channelDetail.thumbnailsUrl" />
      </router-link>
      <div>{{ videoDetail.channelTitle }}</div>
      <div>チャンネル設立日：{{ channelDetail.formatPublishedAt }}</div>
      <div>{{ channelDetail.description }}</div>
      <div>総再生回数：{{ channelDetail.viewCount }}回</div>
      <div>チャンネル登録者数：{{ channelDetail.subscriberCount }}人</div>
      <div>総動画数：{{ channelDetail.videoCount }}個</div>
    </div>

    <div class="review">
      <add-review :videoDetail="videoDetail"></add-review>
      <div class="row">
        <div class="col s12">
          <div class="card content">
            <span class="card-image">
              <img src="/img/東海オンエア.jpeg" />
              <span class="card-title">アイコン</span>
            </span>
            <div class="card-content content">
              <div class="content">投稿者名</div>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="card content">
            <span class="card-image">
              <img src="/img/東海オンエア.jpeg" />
              <span class="card-title">アイコン</span>
            </span>
            <div class="card-content content">
              <div class="content">投稿者名</div>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddReview from "@/components/AddReview.vue";
import axios from "axios";
import { Videos } from "@/types/Videos";
import { Channels } from "@/types/Channels";

@Component({
  components: { AddReview },
})
export default class XXXComponent extends Vue {
  // 動画詳細
  private videoDetail = new Videos(0, "", "", "", "", "", "", "");
  // チャンネル詳細
  private channelDetail = new Channels("", "", "", "", "", 0, 0, 0);

  async created(): Promise<void> {
    const videoId = this.$route.params.id;
    const key = "AIzaSyAzfoPPbpueXEcQypbLRLXXNCz5JQFDtlc";
    console.log("call1");
    const responce = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&key=${key}&id=${videoId}`
    );
    console.log("call2");
    console.log(responce);
    const responceVideo = responce.data.items[0];
    this.videoDetail = new Videos(
      responceVideo.id,
      responceVideo.snippet.publishedAt,
      responceVideo.snippet.title,
      responceVideo.snippet.description,
      responceVideo.snippet.thumbnails.medium.url,
      responceVideo.snippet.channelTitle,
      responceVideo.tags,
      responceVideo.statistics.viewCount
    );
    console.log("call3");
    const responce2 = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?key=${key}&part=snippet,contentDetails,statistics,status&id=${responceVideo.snippet.channelId}`
    );
    console.log("call4");
    const responceChannel = responce2.data.items[0];
    this.channelDetail = new Channels(
      responceChannel.id,
      responceChannel.snippet.title,
      responceChannel.snippet.description,
      responceChannel.snippet.publishedAt,
      responceChannel.snippet.thumbnails.medium.url,
      responceChannel.statistics.viewCount,
      responceChannel.statistics.subscriberCount,
      responceChannel.statistics.videoCount
    );
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
.account {
  border: solid 3px black;
  padding: 50px;
}
img {
  width: 400px;
  height: 300px;
  object-fit: cover;
}
.content {
  display: flex;
}
.card-content {
  flex-direction: column;
}
</style>
