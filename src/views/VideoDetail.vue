<template>
  <div class="container">
    <div class="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9e-UfE6V1Dw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>
        【女子待望】延々と彼氏にプレゼントを贈りつづけたら何にたどり着くの？
      </div>
      <span>165万回視聴・2日前</span>
      <div>東海オンエア</div>
      <img src="/img/tokaionair.jpeg" />
    </div>

    <div class="review">
      <div class="account">
        <div>アカウント名</div>
        <div>レビュープレビュー</div>
      </div>
      <div class="account">
        <div>アカウント名</div>
        <div>レビュープレビュー</div>
      </div>
      <div class="account">
        <div>アカウント名</div>
        <div>レビュープレビュー</div>
      </div>
      <div class="account">
        <div>アカウント名</div>
        <div>レビュープレビュー</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
.account {
  border: solid 3px black;
  padding: 50px;
}
img {
  width: 400px;
  height: 300px;
  object-fit: cover;
}
</style>
