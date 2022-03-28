<template>
  <div>
    <div class="introduction">
      <div>
        <router-link
          :to="'/iconChange/' + currentAccount.id"
          v-if="myAccountFlag"
        >
          <img class="circle responsive-img image2" :src="currentAccount.img" />
        </router-link>
        <img :src="currentAccount.img" v-else />
      </div>
      <div>
        <div class="subtitle">
          {{ currentAccount.name }}
        </div>
        <div>
          {{ currentAccount.introduction }}
        </div>
      </div>
      <div v-if="myAccountFlag" class="selfIntroductionChange">
        <button class="btn" @click="selfIntroductionChange()">編集</button>
      </div>
    </div>
    <hr />
    <h4 class="subtitle">お気に入りのCHANNEL</h4>
    <div class="channelList">
      <div
        v-for="favoriteChannel of currentAccount.favoriteChannelList"
        :key="favoriteChannel.id"
      >
        <router-link :to="'/channelDetail/' + favoriteChannel.id">
          <img
            class="circle responsive-img image3 channel"
            :src="favoriteChannel.thumbnailsUrl"
          />
        </router-link>
      </div>
    </div>
    <hr />
    <div class="reviewList">
      <div v-for="review of currentAccount.reviewList" :key="review.id">
        <router-link :to="'/showReview/' + review.reviewId">
          <div class="review z-depth-5">
            <div class="reviewText">
              <div class="subtitle">
                {{ review.videos.title }}
              </div>
              <div>
                {{ review.evaluation }}
              </div>
              <div>
                {{ review.videos.channelTitle }}
              </div>
              <div>
                {{ review.review }}
              </div>
            </div>
            <div>
              <img class="image" :src="review.videos.thumbnailsUrl" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Account } from "@/types/Account";
import { Channels } from "@/types/Channels";
import { Review } from "@/types/Review";
import { Videos } from "@/types/Videos";
@Component
export default class XXXComponent extends Vue {
  private currentAccount = new Account(
    1,
    "aaa",
    "wwwwww",
    "",
    "aaa.com",
    "09011112222",
    "pass",
    [new Channels("id", "ddd", "ddd", "sss", "/img/pagu.jpg", 1, 1, 1)],
    [
      new Review(
        "",
        1,
        1,
        "",
        "",
        new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss", "ss"),
        1,
        "レビューのプレビュー",
        1
      ),
      new Review(
        "",
        1,
        1,
        "",
        "",
        new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss", "ss"),
        1,
        "レビューのプレビュー",
        1
      ),
      new Review(
        "",
        1,
        1,

        "",
        "",
        new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss", "ss"),
        1,
        "レビューのプレビュー",
        1
      ),
      new Review(
        "",
        1,
        1,
        "",
        "",
        new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss", ""),
        1,
        "レビューのプレビュー",
        1
      ),
    ]
  );
  private myAccountFlag = false;

  created(): void {
    // console.log(this.$route.params.id);
    // const accountId = this.$route.params.id;
    const accountId = 3;
    const account = this.$store.getters.getAccountById(accountId);
    this.currentAccount = new Account(
      account.id,
      account.name,
      account.introduction,
      account.img,
      account.mailaddless,
      account.telephone,
      account.password,
      account.favoriteChannelList,
      account.reviewList
    );
    this.myAccountFlag = this.$store.getters.getMyAccountFlag(account);
  }

  selfIntroductionChange(): void {
    this.$router.push(`/selfIntroductionChange/${this.currentAccount.id}`);
  }
}
</script>

<style scoped>
.image {
  width: 250px;
  height: 250px;
}
.image2 {
  width: 100px;
  height: 100px;
}
.image3 {
  width: 150px;
  height: 150px;
}

.introduction {
  display: flex;
  justify-content: left;
  width: 60%;
  margin: 0 auto;
}

.subtitle {
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
}

.channelList {
  display: flex;
  justify-content: center;
}

.channel {
  margin-left: 30px;
}

.selfIntroductionChange {
  margin-top: 68px;
  margin-left: 600px;
}

.reviewList {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 90%;
  margin: 0 auto;
}
.review {
  display: flex;
  justify-content: center;
  margin-left: 30px;
  margin-top: 30px;
  width: 600px;
}

.reviewText {
  width: 350px;
}
</style>
