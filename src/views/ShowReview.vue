<template>
  <div>
    <div class="content blue-grey lighten-5">
      <div class="account">
        <router-link :to="'/myProfile/' + targetAccount.id">
          <div class="icon">
            <img
              class="account-img circle responsive-img"
              v-bind:src="targetAccount.img"
            />
          </div>
        </router-link>

        <div class="description">
          <router-link :to="'/myProfile/' + targetAccount.id">
            <p class="name">アカウント名： {{ targetAccount.name }}</p>
          </router-link>
          <p>登録情報</p>
          <p>自己紹介： {{ targetAccount.introduction }}</p>
        </div>
      </div>

      <div class="cardSize card large">
        <div class="movie">
          <router-link :to="'/videoDetail/' + targetReview.videos.id">
            <img
              class="movie-img"
              v-bind:src="targetReview.videos.thumbnailsUrl"
            />
          </router-link>
          <div>
            <router-link :to="'/videoDetail/' + targetReview.videos.id">
              <p class="name">タイトル：{{ targetReview.videos.title }}</p>
            </router-link>
            <p>再生回数：{{ targetReview.videos.viewCount }}</p>
            <span class="movieDescription">
              概要：{{ targetReview.videos.description }}
            </span>
            <p>投稿日：{{ targetReview.videos.formatPublishedAt }}</p>
          </div>
          <div class="evaluation">
            <p v-if="targetReview.evaluation === '5'">
              評価：
              <span class="star5_rating" data-rate="5"></span>
            </p>
            <p v-if="targetReview.evaluation === '4'">
              評価：
              <span class="star5_rating" data-rate="4"></span>
            </p>
            <p v-if="targetReview.evaluation === '3'">
              評価：
              <span class="star5_rating" data-rate="3"></span>
            </p>
            <p v-if="targetReview.evaluation === '2'">
              評価：
              <span class="star5_rating" data-rate="2"></span>
            </p>
            <p v-if="targetReview.evaluation === '1'">
              評価：
              <span class="star5_rating" data-rate="1"></span>
            </p>
            <p v-if="targetReview.evaluation === '0'">
              評価：
              <span class="star5_rating" data-rate="0"></span>
            </p>
          </div>
        </div>
        <div class="review">
          <p>
            {{ targetReview.review }}<br />
            レビュー投稿日：{{ targetReview.reviewDate }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Review } from "@/types/Review";
import { Account } from "@/types/Account";
import { Videos } from "@/types/Videos";
import { Channels } from "@/types/Channels";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private targetAccount = new Account(
    0,
    "",
    "",
    "",
    "",
    "",
    "",
    new Array<Channels>(),
    new Array<Review>()
  );
  private targetReview = new Review(
    "",
    0,
    0,
    "",
    "",
    new Videos(0, "", "", "", "", "", "", ""),
    0,
    "",
    0
  );
  private accountList = this.$store.getters.getAccountList;

  created(): void {
    const reviewParamsId = this.$route.params.id;
    console.dir(JSON.stringify("reviewParamsId" + reviewParamsId));
    console.log(this.accountList);

    for (const account of this.accountList) {
      console.dir(JSON.stringify("account" + account));

      for (const review of account.reviewList) {
        console.dir(JSON.stringify("review" + review));

        if (Number(reviewParamsId) === review.reviewId) {
          this.targetReview = review;
          this.targetAccount = account;
          console.dir("this.targetReview" + JSON.stringify(this.targetReview));
          console.dir(
            "this.targetAccount" + JSON.stringify(this.targetAccount)
          );
        }
      }
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
.cardSize {
  display: flex;
  justify-content: baseline;
  height: auto;
  width: 50%;
  margin: 10px;
  padding: 5px;
}
.name {
  font-weight: bold;
}
.movie {
  width: 300px;
  height: auto;
  overflow-x: hidden;
}
.account-img {
  width: 300px;
  height: 300px;
}
.movie-img {
  width: 300px;
}
.review {
  padding: 10px;
  width: 350px;
}
.movieDescription {
  height: 150px;
  width: 300px;
  overflow-wrap: break-word;
  overflow-y: scroll;
  display: block;
}
.star5_rating {
  position: relative;
  z-index: 0;
  display: inline-block;
  white-space: nowrap;
  color: #cccccc; /* グレーカラー 自由に設定化 */
  /*font-size: 30px; フォントサイズ 自由に設定化 */
}

.star5_rating:before,
.star5_rating:after {
  content: "★★★★★";
}

.star5_rating:after {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  color: #ffcf32; /* イエローカラー 自由に設定化 */
}

.star5_rating[data-rate="5"]:after {
  width: 100%;
} /* 星5 */

.star5_rating[data-rate="4"]:after {
  width: 80%;
} /* 星4 */

.star5_rating[data-rate="3"]:after {
  width: 60%;
} /* 星3 */

.star5_rating[data-rate="2"]:after {
  width: 40%;
} /* 星2 */

.star5_rating[data-rate="1"]:after {
  width: 20%;
} /* 星1 */

.star5_rating[data-rate="0"]:after {
  width: 0%;
} /* 星0 */
</style>
