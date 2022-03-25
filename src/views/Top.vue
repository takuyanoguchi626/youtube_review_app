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
        <img class="top-image" src="/img/topImage.gif" />
        <div class="register-user">
          <p class="p1">ユーザー登録はこちらから！</p>
          <button class="button1" type="button" v-on:click="moveToRegister">
            <span>今すぐ登録する</span>
          </button>
          <p class="p2">外部サービスで登録する</p>
          <button class="button2 btn" type="button">
            <img class="button-icon" src="/img/google.png" /><span
              >&nbsp;Googleで登録</span
            >
          </button>
          <button class="button3 btn" type="button">
            <img class="button-icon" src="/img/f_logo_RGB-White_58.png" /><span
              >&nbsp;Facebookで登録</span
            >
          </button>
          <button class="button4 btn" type="button">
            <img
              class="button-icon"
              src="/img/2021 Twitter logo - white.png"
            /><span>&nbsp;Twitterで登録</span>
          </button>
        </div>
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
            <div>{{ video.channelTitle }}</div>
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
  // 人気アカウントの一覧
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
@import "https://use.fontawesome.com/releases/v5.13.0/css/all.css";

/* TOP上部の画像に当てるCSS（テキスト、ボタン含む） */
.top {
  position: relative;
}
.top .p1 {
  position: absolute;
  top: 20%;
  left: 72%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  color: black;
  font-weight: bold;
  font-size: 25px;
}
/* button1 */
.top .button1 {
  position: absolute;
  top: 30%;
  left: 72%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: white;
  border: solid 3px black;
}
.button1:hover {
  text-decoration: none;
  box-shadow: 0 2px 0 #aaaaaa;
}
.button1 span {
  position: relative;
  display: block;
  padding: 1.25rem 3rem;
  color: #000;
}
.top .p2 {
  position: absolute;
  top: 40%;
  left: 72%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-top: 5px;
  padding: 0;
  color: black; /*文字は白に*/
  font-weight: bold; /*太字に*/
  font-size: 20px;
}
/* button2~4 */
.top .button2 {
  position: absolute;
  top: 50%;
  left: 72%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: white;
}
.top .button3 {
  position: absolute;
  top: 60%;
  left: 72%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgb(60, 60, 148);
  border: none;
}
.top .button4 {
  position: absolute;
  top: 70%;
  left: 72%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: cornflowerblue;
  border: none;
}
.button2 span {
  color: black;
}
.button3 span,
.button4 span {
  color: white;
}
/* icon,image */
.button-icon {
  width: 15px;
  height: 15px;
}
.top-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
/* リロード中のGIF */
.gif {
  width: 90%;
  height: 500px;
  object-fit: cover;
}
.contain {
  width: 100vw;
}
.sample {
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
/* サブタイトル */
.subtitle {
  margin-top: 20px;
  font-weight: bold;
}
/* おすすめYoutuberの画像に当てるCSS */
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
</style>
