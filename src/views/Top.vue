<template>
  <div class="contain">
    <div class="count">総レビュー数：0</div>
    <div><button>ユーザー登録はこちらから</button></div>
    <h4 class="name">急上昇動画</h4>

    <div class="sample">
      <div class="soaring-videos">
        <div v-for="video of top5Videos" :key="video.id">
          <iframe
            width="560"
            height="315"
            v-bind:src="'https://www.youtube.com/embed/' + video.id"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div>{{ video.title }}</div>
          <div>投稿日：{{ video.publishedAt }}</div>
        </div>
      </div>
    </div>

    <div class="name">人気のアカウント</div>
    <div class="popular-accounts">
      <div class="account">a</div>
      <div class="account">b</div>
      <div class="account">c</div>
      <div class="account">d</div>
    </div>

    <div class="name">人気Youtuber</div>
    <div class="popular-youtubers">
      <div v-for="(youtuber, index) of youtubersInfo" :key="index">
        <div><img :src="youtuber.thumbnailsUrl" /></div>
        <div>{{ youtuber.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Videos } from "@/types/Videos";
import { Channels } from "@/types/Channels";

@Component
export default class XXXComponent extends Vue {
  // 急上昇動画50件分
  private soaringVideos: Array<Videos> = [];
  // 急上昇動画TOP5
  private top5Videos: Array<Videos> = [];
  // 急上昇動画50件分のチャンネル情報
  private youtubersInfo: Array<Channels> = [];

  async created(): Promise<void> {
    /**
     *Vuexストアのアクション経由非同期でWebAPIから急上昇動画Top5を取得する.
     *@returns Promiseオブジェクト
     */
    await this.$store.dispatch("getSoaringVideos");
    this.soaringVideos = this.$store.getters.getSoaringVideosInfo;
    this.top5Videos.push(
      this.soaringVideos[0],
      this.soaringVideos[1],
      this.soaringVideos[2],
      this.soaringVideos[3],
      this.soaringVideos[4]
    );
    this.youtubersInfo = this.$store.getters.getYoutubersInfo;
  }
}
</script>

<style scoped>
.contain {
  width: 100vw;
}
.sample {
  /* padding-left: 20px; */
  /* width: 500px; */
  max-width: 100%;
}
iframe {
  padding-left: 10px;
}
iframe {
  display: flex;
  justify-content: space-between;
}
.soaring-videos {
  display: flex;
  overflow-x: auto;
}
.popular-youtubers {
  display: flex;
}
.popular-accounts {
  justify-content: center;
  display: flex;
}
.account {
  font-size: 20px;
  border: solid 3px black;
  padding: 50px;
  margin-right: 30px;
}
.name {
  margin-top: 10px;
  font-weight: bold;
}
/* .popular-youtubers {
  width: 250px;
  height: 250px;
  画像の縦横比を維持したまま表示ができるプロパティ
  object-fit: cover;
} */
.tokai {
  width: 350px;
  height: 250px;
  object-fit: cover;
}
</style>
