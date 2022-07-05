<template>
  <div>
    <div class="container">
      <div class="row login-page">
        <div class="col s12 z-depth-6 card-panel">
          <h4 class="pageTitle">レビューを投稿する</h4>
          <div class="login-form">
            <div>
              <img class="iconChange" :src="videoDetail.thumbnailsUrl" alt="" />
            </div>
            <div class="context">
              <div class="stars hyouka">
                <span>
                  <input
                    id="review01"
                    type="radio"
                    name="review"
                    v-bind:value="5"
                    v-model="evaluation"
                  /><label for="review01">★</label>
                  <input
                    id="review02"
                    type="radio"
                    name="review"
                    value="4"
                    v-model="evaluation"
                  /><label for="review02">★</label>
                  <input
                    id="review03"
                    type="radio"
                    name="review"
                    value="3"
                    v-model="evaluation"
                  /><label for="review03">★</label>
                  <input
                    id="review04"
                    type="radio"
                    name="review"
                    value="2"
                    v-model="evaluation"
                  /><label for="review04">★</label>
                  <input
                    id="review05"
                    type="radio"
                    name="review"
                    value="1"
                    v-model="evaluation"
                  /><label for="review05">★</label>
                </span>
              </div>
              <div class="row textarea">
                <form class="col s12 offset-s1">
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea
                        v-model="review"
                        id="textarea1"
                        class="materialize-textarea"
                      ></textarea>
                      <label for="textarea1">Review</label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="row login-btn">
                <button class="btn" type="button" @click="postReview()">
                  <span>レビューを投稿</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { format } from "date-fns";
import { Videos } from "@/types/Videos";
import axios from "axios";
import { Account } from "@/types/Account";
import db from "../firebase.js";
import { collection, doc, onSnapshot, setDoc } from "@firebase/firestore";
import { Review } from "@/types/Review";
import { Channels } from "@/types/Channels";
@Component
export default class XXXComponent extends Vue {
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  //5段階評価
  private evaluation = 0;
  //レビュー内容
  private review = "";
  //レビューをする動画の情報
  private videoDetail = new Videos(0, "", "", "", "", "", "");
  //DBの中のアカウントリスト
  private accountList = Array<Account>();
  //ログインしているユーザーのID
  private currentUserId = this.$store.getters.getCurrentUserId;
  //最後に投稿したレビューのID(DBから持ってきて入れる)
  private reviewLastId = 0;

  async created(): Promise<void> {
    //URLから受け取ったvideoID
    const videoId = this.$route.params.id;
    //APIKeyの配列
    const keys = this.$store.getters.getApiKey;
    for (const key of keys) {
      try {
        const responce = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&key=${key}&id=${videoId}`
        );
        const responceVideo = responce.data.items[0];
        this.videoDetail = new Videos(
          responceVideo.id,
          responceVideo.snippet.publishedAt,
          responceVideo.snippet.title,
          responceVideo.snippet.description,
          responceVideo.snippet.thumbnails.medium.url,
          responceVideo.snippet.channelTitle,
          responceVideo.statistics.viewCount
        );
        //DBからアカウント一覧を取得
        const post = collection(db, "アカウント一覧");
        onSnapshot(post, (post) => {
          const accountListByDb = post.docs.map((doc) => ({ ...doc.data() }));
          for (const account of accountListByDb) {
            const favoriteChannelList = Array<Channels>();
            for (const channel of account.favoriteChannelList) {
              favoriteChannelList.push(
                new Channels(
                  channel.id,
                  channel.title,
                  channel.description,
                  channel.publishedAt,
                  channel.thumbnailsUrl,
                  channel.viewCount,
                  channel.subscriberCount,
                  channel.videoCount
                )
              );
            }
            const reviewList = Array<Review>();
            for (const review of account.reviewList) {
              reviewList.push(
                new Review(
                  review.reviewDate,
                  review.reviewId,
                  review.accountId,
                  new Videos(
                    review.videos.id,
                    review.videos.publishedAt,
                    review.videos.title,
                    review.videos.description,
                    review.videos.thumbnailsUrl,
                    review.videos.channelTitle,
                    review.videos.viewCount
                  ),
                  review.evaluation,
                  review.review,
                  review.favoriteCount
                )
              );
            }
            this.accountList.push(
              new Account(
                account.id,
                account.name,
                account.introduction,
                account.img,
                account.mailaddless,
                account.telephone,
                account.password,
                favoriteChannelList,
                reviewList
              )
            );
          }
        });
        //DBからレビューラストIDを取得
        onSnapshot(doc(db, "レビューラストID", "レビューラストID"), (doc) => {
          this.reviewLastId = { ...doc.data() }.reviewLastId;
        });
        return;
      } catch (e) {
        console.log("APIerror");
      }
    } //end APIのtry,chatch
  } //end created
  /**
   * 現在時刻をフォーマット化して取得.
   *
   * @returns フォーマット化された現在時刻
   */
  getDate(): string {
    const nowDate = format(new Date(), "yyyy年MM月dd日");
    return nowDate;
  }
  /**
   * レビューを投稿、DBに格納する.
   */
  postReview(): void {
    //DBのアカウント一覧から、今ログイン中のアカウント情報を取得
    const account = this.accountList.find(
      (account) => Number(account.id) === Number(this.currentUserId)
    );
    if (account !== undefined) {
      account.reviewList.push(
        new Review(
          this.getDate(),
          this.reviewLastId,
          account.id,
          this.videoDetail,
          this.evaluation,
          this.review,
          new Array<number>()
        )
      );
      try {
        //DBのレビューラストIDを一つプラスする
        setDoc(doc(db, "レビューラストID", "レビューラストID"), {
          reviewLastId: Number(this.reviewLastId) + 1,
        });
        //インスタンス化されたものをDBに格納するために連想配列の形に変える
        const reviewArr = Array<any>();
        for (const review of account.reviewList) {
          if (review.favoriteCount === undefined) {
            reviewArr.push({
              reviewDate: review.reviewDate,
              reviewId: review.reviewId,
              accountId: review.accountId,
              videos: {
                id: review.videos.id,
                publishedAt: review.videos.publishedAt,
                title: review.videos.title,
                description: review.videos.description,
                thumbnailsUrl: review.videos.thumbnailsUrl,
                channelTitle: review.videos.channelTitle,
                viewCount: review.videos.viewCount,
              },
              evaluation: review.evaluation,
              review: review.review,
              favoriteCount: [],
            });
          } else {
            reviewArr.push({
              reviewDate: review.reviewDate,
              reviewId: review.reviewId,
              accountId: review.accountId,
              videos: {
                id: review.videos.id,
                publishedAt: review.videos.publishedAt,
                title: review.videos.title,
                description: review.videos.description,
                thumbnailsUrl: review.videos.thumbnailsUrl,
                channelTitle: review.videos.channelTitle,
                viewCount: review.videos.viewCount,
              },
              evaluation: review.evaluation,
              review: review.review,
              favoriteCount: review.favoriteCount,
            });
          }
        }
        const channelArr = Array<any>();
        for (const channel of account.favoriteChannelList) {
          channelArr.push({
            id: channel.id,
            title: channel.title,
            description: channel.description,
            publishedAt: channel.publishedAt,
            thumbnailsUrl: channel.thumbnailsUrl,
            viewCount: channel.viewCount,
            subscriberCount: channel.subscriberCount,
            videoCount: channel.videoCount,
          });
        }
        // レビューをDBに保存
        const docRef = setDoc(doc(db, "アカウント一覧", String(account.id)), {
          id: account.id,
          name: account.name,
          introduction: account.introduction,
          img: account.img,
          mailaddless: account.mailaddless,
          telephone: account.telephone,
          password: account.password,
          favoriteChannelList: channelArr,
          reviewList: reviewArr,
        });
        console.log(docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.$router.push(`/videoDetail/${this.videoDetail.id}`);
    }
  }
}
</script>

<style scoped>
.textarea {
  margin-right: 10px;
}

.context {
  /* display: flex;
  flex-direction: column; */
  width: 600px;
}
.iconChange {
  width: 300px;
  /* height: 500px; */
}
.login-form {
  display: flex;
  /* flex-direction: column; */
}

.hyouka {
  display: flex;
  justify-content: center;
}

.stars span {
  text-align: center;
  display: flex; /* 要素をフレックスボックスにする */
  flex-direction: row-reverse; /*星を逆順に並べる*/
  justify-content: flex-end; /* 逆順なので、左寄せにする */
}

.stars input[type="radio"] {
  display: none; /* デフォルトのラジオボタンを非表示にする */
}

.stars label {
  color: #d2d2d2; /* 未選択の星をグレー色に指定 */
  font-size: 30px; /* 星の大きさを30pxに指定 */
  padding: 0 5px; /* 左右の余白を5pxに指定 */
  cursor: pointer; /* カーソルが上に乗ったときに指の形にする */
}

.stars label:hover,
.stars label:hover ~ label,
.stars input[type="radio"]:checked ~ label {
  color: #f8c601; /* 選択された星以降をすべて黄色にする */
}
</style>
