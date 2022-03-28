<template>
  <div>
    <router-link :to="'/iconChange/' + currentAccount.id" v-if="myAccountFlag">
      <img :src="currentAccount.img" />
    </router-link>
    <img :src="currentAccount.img" v-else />
    <div>名前：{{ currentAccount.name }}</div>
    <div>
      {{ currentAccount.introduction }}
    </div>
    <div v-if="myAccountFlag">
      <button @click="selfIntroductionChange()">編集</button>
    </div>
    <div
      v-for="favoriteChannel of currentAccount.favoriteChannelList"
      :key="favoriteChannel.id"
    >
      <router-link :to="'/channelDetail/' + favoriteChannel.id">
        <img class="image" :src="favoriteChannel.thumbnailsUrl" />
      </router-link>
    </div>
    <div v-for="review of currentAccount.reviewList" :key="review.id">
      <router-link :to="'/showReview/' + review.reviewId">
        <div>
          <img class="image2" :src="review.videos.thumbnailsUrl" />
          {{ review.videos.title }}
          {{ review.videos.publishedAt }}
          {{ review.videos.channelTitle }}
          {{ review.review }}
        </div>
      </router-link>
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
  width: 300px;
  height: 300px;
}
.image2 {
  width: 100px;
  height: 100px;
}
</style>
