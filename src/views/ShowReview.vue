<template>
  <div>
    <div class="content">
      <div class="account">
        <div class="icon">
          <img src="/img/pagu.jpg" />
        </div>
        <div class="description">
          <p>アカウント名</p>
          <p>登録情報</p>
          <p>自己紹介</p>
        </div>
      </div>

      <div class="cardSize card large">
        <div class="movie">
          <img src="/img/tokai3.jpeg" />
          <p>動画タイトル</p>
          <div class="evaluation">
            <img src="/img/hyouka.png" />
          </div>
        </div>
        <div class="review">
          <p>タイトル</p>
          <p>
            あああああああああああああaaaaaaaaaaaaaaaあああああああああああああaaaaaaaaaaaaaaaaaaaaaあああああああああああああああaaaaaaaaaaaaaaaaaaaaaあああああああああああああああaaaaaaaaaaaaaaaaaaaaaああaあああああああああああああaaaaaaaaaaaaaaaaaaaaaあああああああああああああああaaaaaaaaaaaaaaaaaaaaaあああああああああああああああaaaaaaaaaaaaaaaaaaaaaあああああああああああああああaaaaaaaaaaaaaaaaaaaaaあああああああああああああああaaaaaaaaaaaaaaaaaaaaaあああああああああああああああaaaaaaaaaaaaaaaaaaaaaあああああああああああああああaaaaaaaaaaaaaaaaaaaaaああaaaaaああ
          </p>
        </div>
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
.content {
  display: flex;
  justify-content: center;
}
.cardSize {
  display: flex;
  justify-content: baseline;
  height: auto;
  width: 50%;
}
movie {
  width: 50;
  height: auto;
}
</style>
