<template>
  <div>
    <div>
      評価：
      <label for="1">
        <input
          type="radio"
          name="hyouka"
          id="1"
          v-model="evaluation"
          value="1"
        />
        <span> 1</span>
      </label>
      <label for="2">
        <input
          type="radio"
          name="hyouka"
          id="2"
          v-model="evaluation"
          value="2"
        />
        <span> 2</span>
      </label>
      <label for="3">
        <input
          type="radio"
          name="hyouka"
          id="3"
          v-model="evaluation"
          value="3"
        />
        <span> 3</span>
      </label>
      <label for="4">
        <input
          type="radio"
          name="hyouka"
          id="4"
          v-model="evaluation"
          value="4"
        />
        <span> 4</span>
      </label>
      <label for="5">
        <input
          type="radio"
          name="hyouka"
          id="5"
          v-model="evaluation"
          value="5"
        />
        <span> 5</span>
      </label>
    </div>
    <div>
      <textarea name="" id="" cols="30" rows="10" v-model="review"></textarea>
    </div>
    <div>
      <button @click="postReview()">レビューを投稿</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import format from "date-fns/fp/format/index.js";
import { Videos } from "@/types/Videos";
@Component
export default class XXXComponent extends Vue {
  private date = new Date();
  private evaluation = 0;
  private review = "";
  @Prop()
  private videoDetail!: Videos;

  getDate(): string {
    return format("yyyy年MM月dd日", this.date);
  }

  postReview(): void {
    console.log(this.videoDetail);

    // console.log(this.review);
    this.$store.commit("postReview", {
      date: this.getDate,
      evaluation: this.evaluation,
      review: this.review,
      video: this.videoDetail,
    });
  }
}
</script>

<style scoped></style>
