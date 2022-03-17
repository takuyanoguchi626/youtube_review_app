<template>
  <div class="container">
    <div class="youtuber">
      <div>東海オンエア</div>
      <img src="/img/tokaionair.jpeg" />
      <p>
        どうも、東海オンエアです。\nぜひチャンネル登録お願いします！\n\nサブチャンネル【東海オンエアの控え室】もぜひチャンネル登録してね！！！\nhttps://www.youtube.com/channel/UCynIYcsBwTrwBIecconPN2A\n\n有料メンバーシップの登録はこちらから！\nhttps://www.youtube.com/channel/UCutJqz56653xV2wwSvut_hQ/join\n\nお仕事の依頼はこちらから\nhttps://www.uuum.co.jp/inquiry_promotion\n\nファンレターはこちらへ\n〒107-6228\n東京都港区赤坂9-7-1ミッドタウン・タワー
        28階\nUUUM株式会社 東海オンエア宛
      </p>
      <span>総再生回数：100億回 /</span
      ><span> チャンネル登録者数：635万人</span>
    </div>
    <div class="videos">
      <router-link to="/videoDetail"
        ><img src="/img/tokai1.jpeg"
      /></router-link>
      <div>
        【女子待望】延々と彼氏にプレゼントを贈りつづけたら何にたどり着くの？
      </div>
      <span>165万回視聴・2日前</span>
      <img src="/img/tokai2.jpeg" />
      <div>
        【千円台は注文禁止】1万円企画と大食い企画を融合させた、新しい「成功するまで終われない」を思いついたのでやってみたら・・・
      </div>
      <span>262万回視聴・5日前</span>
      <img src="/img/tokai3.jpeg" />
      <div>
        【文理対決】超簡単な常識問題にチーム全員１０問連続正解するまで終わらないぜ！
      </div>
      <span>381万回視聴・1ヶ月前</span>
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
}
img {
  width: 500px;
  height: 300px;
  object-fit: cover;
}
</style>
