<template>
  <div class="contain">
    <div v-if="flag">
      <img
        class="gif"
        src="/img/18905401_MotionElements_transition-10_converted_481357-640x360-3s-q2.gif"
      />
    </div>

    <div v-if="!flag">
      <div class="top">
        <img class="top-image" src="/img/topImage.png" />
        <p>ユーザー登録はこちらから</p>
        <button type="button" v-on:click="moveToRegister">今すぐ登録！</button>
      </div>
      <div class="count">総レビュー数：0</div>
      <h4 class="subtitle">急上昇動画</h4>
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
            <router-link :to="'/videoDetail/' + video.id">
              <div class="video-title">{{ video.title }}</div>
            </router-link>
            <div>投稿日：{{ video.formatPublishedAt }}</div>
          </div>
        </div>
      </div>

      <h4 class="subtitle">人気のアカウント</h4>
      <div class="popular-accounts">
        <div v-for="(account, index) of recommendationAccountList" :key="index">
          <div class="account">{{ account.name }}</div>
          <img :src="account.img" />
        </div>
      </div>

      <h4 class="subtitle">おすすめYoutuber</h4>
      <div class="popular-youtubers">
        <div
          v-for="(youtuber, index) of recommendationYoutuberList"
          :key="index"
        >
          <router-link :to="'/channelDetail/' + youtuber.id"
            ><div><img class="img_wrap" :src="youtuber.thumbnailsUrl" /></div
          ></router-link>
          <div>{{ youtuber.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Videos } from "@/types/Videos";
import { Channels } from "@/types/Channels";
import { Account } from "@/types/Account";

@Component
export default class XXXComponent extends Vue {
  // 急上昇動画50件分
  private soaringVideos: Array<Videos> = [];
  // 急上昇動画TOP5
  private top5Videos: Array<Videos> = [];
  // 急上昇動画50件分のチャンネル情報
  private youtubersInfo: Array<Channels> = [];
  // おすすめYoutuberの一覧
  private recommendationYoutuberList = Array<Channels>();
  private recommendationAccountList = Array<Account>();
  // フラッグ
  private flag = true;

  async created(): Promise<void> {
    /**
     *Vuexストアのアクション経由非同期でWebAPIから急上昇動画Top5を取得する.
     *@returns Promiseオブジェクト
     */
    if (await this.$store.dispatch("getSoaringVideos")) {
      this.flag = true;
    } else {
      this.flag = false;
      this.soaringVideos = this.$store.getters.getSoaringVideosInfo;
      this.top5Videos.push(
        this.soaringVideos[0],
        this.soaringVideos[1],
        this.soaringVideos[2],
        this.soaringVideos[3],
        this.soaringVideos[4]
      );
      this.youtubersInfo = this.$store.getters.getYoutubersInfo;
      // おすすめYoutuberを５人ランダム表示させる
      for (let i = 1; this.recommendationYoutuberList.length < 5; i++) {
        let pushYoutuber =
          this.youtubersInfo[
            Math.floor(Math.random() * this.youtubersInfo.length)
          ];
        if (
          this.recommendationYoutuberList.find(
            (youtuber) => youtuber.id === pushYoutuber.id
          ) === undefined
        ) {
          this.recommendationYoutuberList.push(pushYoutuber);
        }
      }
    }
    this.$store.commit("sortByReviewCount");
    this.recommendationAccountList = this.$store.getters.getAccountList;
  }
  /**
   *ユーザー登録画面に遷移する.
   */
  moveToRegister(): void {
    this.$router.push("/registerUser");
  }
}
</script>

<style scoped>
.img_wrap {
  border: 1px solid #ddd;
  margin: 0 auto;
  overflow: hidden;
}
.img_wrap img {
  width: 100%;
  cursor: pointer;
  transition-duration: 0.3s;
}
.img_wrap:hover,
.video-title:hover {
  opacity: 0.6;
  transition-duration: 0.3s;
}
.top {
  position: relative;
}
.top p {
  position: absolute;
  top: 50%;
  left: 80%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  color: black; /*文字は白に*/
  font-weight: bold; /*太字に*/
  font-size: 20px;
}
.top button {
  position: absolute;
  top: 55%;
  left: 80%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.top-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.gif {
  width: 90%;
  height: 500px;
  object-fit: cover;
}
.contain {
  width: 100vw;
}
.sample {
  /* padding-left: 20px; */
  /* width: 500px; */
  max-width: 100%;
}
iframe {
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
}
.video-title {
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
}
.soaring-videos {
  display: flex;
  overflow-x: auto;
}
.popular-accounts,
.popular-youtubers {
  display: flex;
  justify-content: center;
}
.account {
  font-size: 20px;
  border: solid 3px black;
  padding: 50px;
  margin-right: 30px;
}
.subtitle {
  margin-top: 20px;
  font-weight: bold;
}
</style>
