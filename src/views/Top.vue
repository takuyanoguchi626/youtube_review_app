<template>
  <div class="container">
    <div class="count">総レビュー数：0</div>
    <div><button>ユーザー登録はこちらから</button></div>
    <div class="name">急上昇動画</div>
    <div class="soaring-videos">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/83rLy2zaSBQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/G_AqeDW3X6o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DRRbI9Ni6eY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/oDBYguc_6PI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dZ8H75q8q68"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="name">人気のアカウント</div>
    <div class="popular-accounts">
      <div class="account">a</div>
      <div class="account">b</div>
      <div class="account">c</div>
      <div class="account">d</div>
    </div>
    <div class="name">人気Youtuber</div>
    <div class="popular-youtubers">
      <img src="/img/まあたそ.jpeg" />
      <img src="/img/hikakin.jpeg" />
      <router-link to="/youtuberDetail"
        ><img class="tokai" src="/img/tokaionair.jpeg"
      /></router-link>
      <img src="/img/george.jpeg" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped>
.soaring-videos,
.popular-youtubers {
  display: flex;
}
.popular-accounts {
  justify-content: center;
  display: flex;
}
.account {
  font-size: 20px;
  border: solid 3px black;
  padding: 50px;
  margin-right: 30px;
}
.name {
  margin-top: 10px;
  font-weight: bold;
}
.popular-youtubers {
  width: 250px;
  height: 250px;
  /* 画像の縦横比を維持したまま表示ができるプロパティ */
  object-fit: cover;
}
.tokai {
  width: 350px;
  height: 250px;
  object-fit: cover;
}
</style>
