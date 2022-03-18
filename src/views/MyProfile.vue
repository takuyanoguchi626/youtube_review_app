<template>
  <div>
    <div>名前：チームYouTube</div>
    <img src="/img/pagu.jpg" alt="" />
    <div>
      自己紹介文：はじめまして。YouTubeのレビューをたくさん書いていきます。
    </div>
    <div>
      <img class="image" src="/img/heiseihuramingo.jpg" alt="" />
      <img class="image" src="/img/hikakin.jpg" alt="" />
      <img class="image" src="/img/kazisakku.jpg" alt="" />
      <img class="image" src="/img/paparapi-zu.jpg" alt="" />
      <img class="image" src="/img/yorunohitowarai.jpg" alt="" />
    </div>
    <div>
      <img class="image2" src="/img/review.jpg" alt="" />
      <img class="image2" src="/img/review.jpg" alt="" />
      <img class="image2" src="/img/review.jpg" alt="" />
      <img class="image2" src="/img/review.jpg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Account } from "@/types/Account";
import { Channels } from "@/types/Channels";
import { Review } from "@/types/Review";
@Component
export default class XXXComponent extends Vue {
  private currentAccount = new Account(
    1,
    "aaa",
    "/img/pagu.jpg",
    "aaa.com",
    "09011112222",
    "pass",
    [new Channels("id", "ddd", "ddd", "sss", "sss", 1, 1, 1)],
    [new Review(1, 1, 1, "eee", 1)]
  );

  created(): void {
    console.log(this.$route.params.id);
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
