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
          <router-link
            class="name-title"
            :to="'/myProfile/' + targetAccount.id"
          >
            <p>{{ targetAccount.name }}</p>
          </router-link>
          <p>{{ targetAccount.introduction }}</p>
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
            <router-link
              class="name-title"
              :to="'/videoDetail/' + targetReview.videos.id"
            >
              <p>{{ targetReview.videos.title }}</p>
            </router-link>
            <p>再生回数：{{ targetReview.videos.formatViewCount }}回</p>
            <p class="name-title">【{{ targetReview.videos.channelTitle }}】</p>
            <span class="movieDescription">
              【概要欄】<br />{{ targetReview.videos.description }}
            </span>
            <p>投稿日：{{ targetReview.videos.formatPublishedAt }}</p>
          </div>
        </div>
        <div class="review">
          <div class="evaluation">
            <p>
              評価：
              <span
                class="star5_rating"
                :data-rate="targetReview.evaluation"
              ></span>
            </p>
          </div>
          <h6>Review</h6>
          <pre class="review300">{{ targetReview.review }}<br /></pre>
          <div class="review-data">
            <p>レビュー投稿日：{{ targetReview.reviewDate }}</p>
            <a
              class="waves-effect waves-light btn"
              v-on:click="favoriteReview()"
              v-if="currentUserId !== 0 && !isMyAccount && !flagState"
              ><i class="material-icons left">thumb_up</i>いいね{{ count }}</a
            >
            <a
              class="waves-effect waves-light btn remove-btn"
              v-on:click="removeFavoriteReview(currentUserId)"
              v-if="currentUserId !== 0 && !isMyAccount && flagState"
              ><i class="material-icons left">thumb_up</i>いいね{{ count }}</a
            >
            <a
              class="waves-effect waves-light btn disable-btn"
              :disabled="true"
              v-if="currentUserId === 0 || isMyAccount"
              ><i class="material-icons left">thumb_up</i>いいね{{ count }}</a
            >
          </div>
          <div>
            <a class="btn" v-on:click="transitionEdit()" v-if="isMyAccount"
              ><i class="material-icons left">build</i>編集</a
            >
            <a class="btn delete" v-on:click="deleteReview()" v-if="isMyAccount"
              ><i class="material-icons left">delete_forever</i>削除</a
            >
          </div>
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
  // ステートから取得したユーザー情報
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
  // ステートから取得したレビュー情報
  private targetReview = new Review(
    "",
    0,
    0,
    new Videos(0, "", "", "", "", "", "", ""),
    0,
    "",
    new Array<number>()
  );
  // ステートの全ユーザー情報
  private accountList = this.$store.getters.getAccountList;
  // 取得したレビューのいいねカウント
  private favoriteCount = this.targetReview.favoriteCount;
  // ボタンの使用可否
  private flag = false;
  // ログイン中のユーザー
  private currentUserId = this.$store.getters.getCurrentUser.id;
  // URLから取得したレビューID
  private reviewParamsId = this.$route.params.id;
  //自分のアカウントのレビューかどうか
  get isMyAccount(): boolean {
    return this.currentUserId === this.reviewFavorite.accountId;
  }

  // ステートから取得したレビュー
  get reviewFavorite(): Review {
    // URLから取得したid

    // ステートの情報の中からURLで付与されたものと同一の一意のidのレビューを取得する
    for (const account of this.accountList) {
      for (const review of account.reviewList) {
        if (Number(this.reviewParamsId) === review.reviewId) {
          this.targetReview = review;
        }
      }
    }
    return this.targetReview;
  }
  // ボタンの使用可否の取得
  get flagState(): boolean {
    return this.flag;
  }
  // レビューのいいねカウント
  private count = this.reviewFavorite.favoriteCount.length;

  created(): void {
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

    // ステートの情報の中からURLで付与されたものと同一の一意のidのレビューを取得する
    for (const account of this.accountList) {
      for (const review of account.reviewList) {
        if (Number(this.reviewParamsId) === review.reviewId) {
          this.targetReview = review;
          this.targetAccount = account;
        }
      }
    }
    // // ログインしていない、または投稿した本人だったらボタンを押せなくする
    // if (
    //   this.targetReview.accountId === this.currentUserId ||
    //   this.currentUserId === 0 ||
    //   this.reviewFavorite.favoriteCount.includes(this.currentUserId)
    // ) {
    //   this.flag = true;
    // }
  }
  /**
   * レビューにいいねをする.
   */
  favoriteReview(): void {
    this.count = this.count + 1;
    this.reviewFavorite.favoriteCount.push(this.currentUserId);

    // レビューのいいね情報に現在のユーザー情報が含まれていたらボタンを押せなくする

    if (this.reviewFavorite.favoriteCount.includes(this.currentUserId)) {
      this.flag = true;
    }

    this.$store.commit("addFavorite", this.currentUserId);
    console.log(this.$store.state.accountList);
  }
  /**
   * レビューのいいねを取り消す.
   */
  removeFavoriteReview(currentUserId: number): void {
    this.count = this.count - 1;
    this.reviewFavorite.favoriteCount =
      this.reviewFavorite.favoriteCount.filter((num) => num !== currentUserId);
    this.flag = false;
    this.$store.commit("removeFavoriteReview", this.currentUserId);
    console.log(this.$store.state.accountList);
  }
  transitionEdit(): void {
    this.$router.push("/EditReview/" + this.targetReview.reviewId);
  }

  deleteReview(): void {
    const result = confirm("本当に削除しますか？");
    if (result === true) {
      this.$store.commit("deleteReview", {
        reviewId: this.targetReview.reviewId,
      });
      this.$router.push("/videoDetail/" + this.targetReview.videos.id);
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
.movie {
  width: 300px;
  height: auto;
  overflow-x: hidden;
}
.account-img {
  margin-top: 5px;
  width: 150px;
  height: 150px;
}
.movie-img {
  width: 300px;
}
.review {
  padding: 10px 0px 10px 20px;
  width: 350px;
  position: relative;
}

.review300 {
  font-weight: bold;
  text-align: left;
  border: thick double;
  /* overflow-wrap: normal; */
  /* word-break: normal; */
  white-space: pre-wrap;
}

.delete {
  margin-left: 20px;
}
.remove-btn {
  margin-bottom: 5px;
  background-color: rgb(223, 223, 223);
  color: rgb(159, 159, 159);
}
.disable-btn {
  margin-bottom: 5px;
}

.movieDescription {
  height: 150px;
  width: 300px;
  overflow-wrap: break-word;
  overflow-y: scroll;
  display: block;
}
.name-title {
  font-weight: bold;
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
