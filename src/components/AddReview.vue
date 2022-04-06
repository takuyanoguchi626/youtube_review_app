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
import db from "@/firebase";
import { collection, doc, onSnapshot, setDoc } from "@firebase/firestore";
import { Review } from "@/types/Review";
@Component
export default class XXXComponent extends Vue {
  private evaluation = 0;
  private review = "";
  private videoDetail = new Videos(0, "", "", "", "", "", "");
  //DBの中のアカウントリスト
  private accountList = Array<Account>();
  //
  private currentUserId = this.$store.getters.getCurrentUser.id;
  //最後に投稿したレビューのID
  private reviewLastId = 30;

  async created(): Promise<void> {
    // const currentUserId = this.$store.getters.getCurrentUser.id;
    const videoId = this.$route.params.id;
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

        const post = collection(db, "アカウント一覧");
        onSnapshot(post, (post) => {
          const accountListByDb = post.docs.map((doc) => ({ ...doc.data() }));
          for (const account of accountListByDb) {
            this.accountList.push(
              new Account(
                account.id,
                account.name,
                account.introduction,
                account.img,
                account.mailaddless,
                account.telephone,
                account.password,
                account.favoriteChannelList,
                account.reviewList
              )
            );
          }
        });

        onSnapshot(doc(db, "レビューラストID", "レビューラストID"), (doc) => {
          this.reviewLastId = { ...doc.data() }.reviewLastId;
          console.log("created" + this.reviewLastId);
        });
        console.log("createdlast");

        return;
      } catch (e) {
        console.log("APIerror");
      }
    }
  }

  getDate(): string {
    const nowDate = format(new Date(), "yyyy年MM月dd日");
    return nowDate;
  }

  postReview(): void {
    console.log("start");

    const account = this.accountList.find(
      (account) => Number(account.id) === Number(this.currentUserId)
    );
    console.log(account);
    console.log(this.currentUserId);
    console.log(this.accountList);
    console.log(1111);

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
        setDoc(doc(db, "レビューラストID", "レビューラストID"), {
          reviewLastId: Number(this.reviewLastId) + 1,
        });
        // console.log(docRef1);
        // console.log("Document written with ID: ", docRef.id);

        // const reviewMap = new Map();
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
                // tags: review.videos.tags,
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
                // tags: review.videos.tags,
                viewCount: review.videos.viewCount,
              },
              evaluation: review.evaluation,
              review: review.review,
              favoriteCount: review.favoriteCount,
            });
          }
        }

        console.log(reviewArr);

        // dbに保存

        const docRef = setDoc(doc(db, "アカウント一覧", String(account.id)), {
          id: account.id,
          name: account.name,
          introduction: account.introduction,
          img: account.img,
          mailaddless: account.mailaddless,
          telephone: account.telephone,
          password: account.password,
          favoriteChannelList: account.favoriteChannelList,
          reviewList: reviewArr,
        });
        console.log("DBに保存");
        console.log(docRef);
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        console.log("Error adding document: ");
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
