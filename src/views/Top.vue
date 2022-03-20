<template>
  <div class="contain">
    <div class="count">総レビュー数：0</div>
    <div><button>ユーザー登録はこちらから</button></div>
    <h4 class="name">急上昇動画</h4>

    <div class="sample">
      <div class="soaring-videos">
        <div v-for="video of soaringVideos" :key="video.id">
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

    <!-- <div class="name">人気Youtuber</div>
    <div class="popular-youtubers">
      <img src="/img/まあたそ.jpeg" />
      <img src="/img/hikakin.jpeg" />
      <router-link to="/youtuberDetail"
        ><img class="tokai" src="/img/tokaionair.jpeg"
      /></router-link>
      <img src="/img/george.jpeg" />
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Videos } from "@/types/Videos";
@Component
export default class XXXComponent extends Vue {
  // 急上昇動画
  private soaringVideos: Array<Videos> = [];

  async created(): Promise<void> {
    /**
     *Vuexストアのアクション経由非同期でWebAPIから急上昇動画Top5を取得する.
     *@returns Promiseオブジェクト
     */
    await this.$store.dispatch("getSoaringVideos");
    this.soaringVideos = this.$store.getters.getSoaringVideosInfo;

    await this.$store.dispatch("getYoutubersInfo");
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
