<template>
  <div>
    <div class="container">
      <p>検索結果:検索ワード</p>
      <div class="contents blue-grey lighten-5">
        <div class="items">
          <h5>ユーチューバー</h5>

          <div class="item-area">
            <div class="youtuber-items">
              <br />
              <div class="item col s12 m6 card white">
                <div class="item-icon">
                  <img src="/img/東海オンエア.jpeg" />
                </div>
                <a href="item_detail.html">ユーチューバー名</a><br />
                <span class="title"></span>登録者数<br />
                <span class="title"></span>動画本数<br />
                <span class="title"></span>説明<br />
              </div>

              <div class="item col s12 m6 card white">
                <div class="item-icon">
                  <img src="/img/東海オンエア.jpeg" />
                </div>
                <a href="item_detail.html">ユーチューバー名</a><br />
                <span class="title"></span>登録者数<br />
                <span class="title"></span>動画本数<br />
                <span class="title"></span>説明<br />
              </div>

              <div class="item col s12 m6 card">
                <div class="item-icon">
                  <img src="/img/東海オンエア.jpeg" />
                </div>
                <a href="item_detail.html">ユーチューバー名</a><br />
                <span class="title"></span>登録者数<br />
                <span class="title"></span>動画本数<br />
                <span class="title"></span>説明<br />
              </div>
            </div>
          </div>
          <div class="items">
            <h5>動画</h5>
            <div class="item-area">
              <div class="video-items">
                <div class="movie">
                  <br />
                  <span class="item col card white">
                    <div class="item-icon">
                      <iframe
                        width="500"
                        height="280"
                        src="https://www.youtube.com/embed/BOrdMrh5uKg"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <a href="item_detail.html">ビデオタイトル</a><br />
                    <span class="title"></span>再生回数<br />
                    <span class="title"></span>ユーチューバー名<br />
                    <span class="title"></span>説明<br />
                  </span>

                  <span class="item col s12 m6 card white">
                    <div class="item-icon">
                      <iframe
                        width="500"
                        height="280"
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
                    <span class="title"></span>説明<br />
                  </span>

                  <span class="item col s12 m6 card white">
                    <div class="item-icon">
                      <iframe
                        width="500"
                        height="280"
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
                    <span class="title"></span>説明<br />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
@Component
export default class XXXComponent extends Vue {
  async created(): Promise<void> {
    const searchText = this.$route.params.searchText;

    console.log(searchText);
    const response1 = await axios.get(
      // ビデオの検索API
      `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&maxResults=50&regionCode=JP&key=AIzaSyDGH0fCaERPGyogO0o-rhlir2nnzISDRjM&q=`
    );
    const payload1 = response1.data;
    console.dir("レスポンスデータ" + payload1);
    // for (let video of videos) {
    //   console.dir(JSON.stringify(responseData1));
    // }
    const response2 = await axios.get(
      // チャンネルの検索API
      `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=50&regionCode=JP&key=AIzaSyDGH0fCaERPGyogO0o-rhlir2nnzISDRjM&q=`
    );
    const payload2 = response2.data;
    console.dir("レスポンスデータ" + payload2);
    // const channelItems = payload2.items;
    // console.dir(JSON.stringify(channelItems));
    // for (let channel of channels) {
    //   console.dir(JSON.stringify(responseData2));
    // }
  }
}
</script>

<style scoped>
.movie {
  display: flex;
  justify-content: center;
}
.item-area {
  display: flex;
  justify-content: center;
}
.container {
  width: 100vw;
}
.contents {
  padding: 5px;
}

.youtuber-items {
  display: flex;
  overflow-x: auto;
}
.video-items {
  display: flex;
  overflow-x: auto;
}

.item {
  /* flex: 0 0 320px; paddingやborder含むitem全体の横幅を320pxにする */
  padding: 20px;
  margin: 10px;
}
</style>
