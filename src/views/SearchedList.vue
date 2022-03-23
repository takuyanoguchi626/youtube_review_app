<template>
  <div>
    <div class="container">
      <p>検索結果:検索ワード</p>
      <div class="items">
        <p>ユーチューバー</p>
        <div class="youtuber">
          <br />
          <div class="item">
            <div class="item-icon">
              <img src="/img/東海オンエア.jpeg" />
            </div>
            <a href="item_detail.html">ユーチューバー名</a><br />
            <span class="title"></span>登録者数<br />
            <span class="title"></span>動画本数<br />
          </div>

          <div class="item">
            <div class="item-icon">
              <img src="/img/東海オンエア.jpeg" />
            </div>
            <a href="item_detail.html">ユーチューバー名</a><br />
            <span class="title"></span>登録者数<br />
            <span class="title"></span>動画本数<br />
          </div>

          <div class="item">
            <div class="item-icon">
              <img src="/img/東海オンエア.jpeg" />
            </div>
            <a href="item_detail.html">ユーチューバー名</a><br />
            <span class="title"></span>登録者数<br />
            <span class="title"></span>動画本数<br />
          </div>
        </div>
        <div class="items">
          <p>動画</p>
          <div class="movie">
            <br />
            <span class="item">
              <div class="item-icon">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/BOrdMrh4uKg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <a href="item_detail.html">ビデオタイトル</a><br />
              <span class="title"></span>再生回数<br />
              <span class="title"></span>ユーチューバー名<br />
            </span>

            <span class="item">
              <div class="item-icon">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ony539T074w"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <a href="item_detail.html">ビデオタイトル</a><br />
              <span class="title"></span>再生回数<br />
              <span class="title"></span>ユーチューバー名<br />
            </span>

            <span class="item">
              <div class="item-icon">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/M6gcoDN9jBc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <a href="item_detail.html">ビデオタイトル</a><br />
              <span class="title"></span>再生回数<br />
              <span class="title"></span>ユーチューバー名<br />
            </span>
          </div>
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
.movie {
  display: flex;
  justify-content: center;
}
.youtuber {
  display: flex;
  justify-content: center;
}
.items {
  flex-wrap: wrap; /* 表示内容が多かった時に自動的に複数行に分割される */
}

.item {
  flex: 0 0 320px; /* paddingやborder含むitem全体の横幅を320pxにする */
  padding: 20px;
}
</style>
