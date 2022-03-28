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
          videoDetail.formatViewCount
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
      <div class="row" v-for="review of reviewList" :key="review.id">
        <router-link :to="'/showReview/' + review.reviewId">
          <div class="col s12">
            <div class="card content">
              <span class="card-image">
                <img :src="review.accountIcon" />
              </span>
              <div class="card-content content">
                <div class="content">{{ review.accountName }}</div>
                <div class="content">{{ review.evaluation }}</div>
                <p>
                  {{ review.review }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
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
import { Review } from "@/types/Review";

@Component({
  components: { AddReview },
})
export default class XXXComponent extends Vue {
  // 動画詳細
  private videoDetail = new Videos(0, "", "", "", "", "", "", "");
  // チャンネル詳細
  private channelDetail = new Channels("", "", "", "", "", 0, 0, 0);
  private reviewList = new Array<Review>();

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

    const videoId = this.$route.params.id;
    const key = "AIzaSyAzfoPPbpueXEcQypbLRLXXNCz5JQFDtlc";
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
    this.reviewList = this.$store.getters.getReviewListByVideoId(
      this.videoDetail
    );
    console.log(this.reviewList[0].accountIcon);
  } //end created
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
