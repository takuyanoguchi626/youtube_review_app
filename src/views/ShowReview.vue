<template>
  <div>
    <div class="content blue-grey lighten-5">
      <div class="account">
        <div class="icon">
          <img class="account-img" src="/img/pagu.jpg" />
        </div>
        <div class="description">
          <p>アカウント名： {{ targetReview.accountId }}</p>
          <p>登録情報</p>
          <p>自己紹介</p>
        </div>
      </div>

      <div class="cardSize card large">
        <div class="movie">
          <img class="movie-img" src="/img/tokai3.jpeg" />
          <p>動画タイトル：{{ targetReview.videos }}</p>
          <div class="evaluation">
            <img src="/img/hyouka.png" />
          </div>
        </div>
        <div class="review">
          <p>
            {{ targetReview.review }}
            {{ targetReview.reviewDate }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Review } from "@/types/Review";
import { Videos } from "@/types/Videos";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private targetReview = new Review(
    "",
    0,
    0,
    new Videos(0, "", "", "", "", "", "", ""),
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

        if (1 === review.reviewId) {
          this.targetReview = review;
          console.log("this.targetReview" + this.targetReview);
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
}
.movie {
  width: 300px;
  height: auto;
}
.account-img {
  width: 300px;
}
.movie-img {
  width: 300px;
}
.review {
  padding: 10px;
  width: 400px;
}
</style>
