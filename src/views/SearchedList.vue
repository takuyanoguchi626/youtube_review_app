<template>
  <div>
    <div class="container">
      <p>検索結果:{{ this.searchText }}</p>
      <div class="contents blue-grey lighten-5">
        <div class="items">
          <h5>ユーチューバー</h5>

          <div class="item-area">
            <div class="youtuber-items">
              <br />
              <div
                v-for="searchedChannel of searchedChannels"
                :key="searchedChannel.id"
              >
                <div class="c-item col card white">
                  <div>
                    <router-link :to="'/channelDetail/' + searchedChannel.id">
                      <img
                        class="item-icon"
                        v-bind:src="searchedChannel.thumbnailsUrl"
                      />
                    </router-link>
                  </div>
                  <router-link
                    class="name-title"
                    :to="'/channelDetail/' + searchedChannel.id"
                    >{{ searchedChannel.title }}</router-link
                  ><br />

                  <span class="title"
                    >登録者数：{{
                      searchedChannel.formatSubscriberCount
                    }}人</span
                  ><br />
                  <span class="title"
                    >総動画数：{{ searchedChannel.formatViewCount }}個</span
                  ><br />
                  <div class="channel-description">
                    【概要欄】<br />{{ searchedChannel.description }}
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div class="items">
            <h5>動画</h5>
            <div class="item-area">
              <div class="video-items">
                <div class="movie">
                  <br />

                  <div
                    v-for="searchedVideo of searchedVideos"
                    :key="searchedVideo.id"
                  >
                    <div class="v-item col card white">
                      <div class="video-icon">
                        <iframe
                          width="500"
                          height="280"
                          v-bind:src="
                            'https://www.youtube.com/embed/' + searchedVideo.id
                          "
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <router-link
                        class="name-title"
                        v-bind:to="'/videoDetail/' + searchedVideo.id"
                        >{{ searchedVideo.title }}</router-link
                      ><br />
                      <span class="name-title">{{
                        searchedVideo.channelTitle
                      }}</span
                      ><br />
                      <span class="title"
                        >再生回数：{{ searchedVideo.formatViewCount }}回</span
                      ><br />
                      <span class="title"
                        >投稿日：{{ searchedVideo.formatPublishedAt }}</span
                      ><br />

                      <div class="video-description">
                        【概要欄】<br />{{ searchedVideo.description }}
                      </div>
                      <br />
                    </div>
                  </div>
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
import { Videos } from "@/types/Videos";
import { Channels } from "@/types/Channels";
// import linkify from "vue-linkify";
@Component
export default class XXXComponent extends Vue {
  // 動画情報の検索結果
  private searchedVideos: Array<Videos> = [];
  // 検索される動画id
  private videoIdList = new Array<string>();
  // チャンネルの検索結果
  private searchedChannels = new Array<Channels>();
  // 検索されるチャンネルid
  private channelIdList = new Array<string>();
  // 外部APIキー
  private keys = this.$store.getters.getApiKey;
  // 検索ワード
  private searchText = "";

  async created(): Promise<void> {
    // スクロールトップボタン
    scrollTop(1); // 遅すぎるとガクガクになるので注意
    function scrollTop(duration: number) {
      let currentY = window.pageYOffset; // 現在のスクロール位置を取得
      let step = duration / currentY > 1 ? 10 : 100; // 三項演算子
      let timeStep = (duration / currentY) * step; // スクロール時間
      let intervalId = setInterval(scrollUp, timeStep);
      // timeStepの間隔でscrollUpを繰り返す。
      // clearItervalのために返り値intervalIdを定義する。
      function scrollUp() {
        currentY = window.pageYOffset;
        if (currentY === 0) {
          clearInterval(intervalId); // ページ最上部に来たら終了
        } else {
          scrollBy(0, -step); // step分上へスクロール
        }
      }
    }

    // 検索ワードをURLより取得
    this.searchText = this.$route.params.searchText;

    for (const key of this.keys) {
      try {
        const response2 = await axios.get(
          // チャンネルの検索APIでidを取得
          `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=10&regionCode=JP&key=${key}&q=${this.searchText}`
        );
        const channel1Items = response2.data.items;

        for (const item of channel1Items) {
          this.channelIdList.push(item.snippet.channelId);
        }

        // 上で取得したidを使いチャンネルの情報をAPIで取得
        for (let channelId of this.channelIdList) {
          const response3 = await axios.get(
            `https://www.googleapis.com/youtube/v3/channels?key=${key}&maxResults=10&part=snippet,contentDetails,statistics,status&id=${channelId}`
          );
          const channel2Items = response3.data.items;
          for (let channel2Item of channel2Items) {
            this.searchedChannels.push(
              new Channels(
                channel2Item.id,
                channel2Item.snippet.title,
                channel2Item.snippet.description,
                channel2Item.snippet.publishedAt,
                channel2Item.snippet.thumbnails.high.url,
                channel2Item.statistics.viewCount,
                channel2Item.statistics.subscriberCount,
                channel2Item.statistics.videoCount
              )
            );
          }
        }

        const response1 = await axios.get(
          // ビデオの検索APIでidを取得
          `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&maxResults=10&regionCode=JP&key=${key}&q=${this.searchText}`
        );
        const payload1 = response1.data.items;

        for (let preVideo of payload1) {
          this.videoIdList.push(preVideo.id.videoId);
        }
        // 上で取得したidを使いビデオの情報をAPIで取得
        for (let videoId of this.videoIdList) {
          const response3 = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&regionCode=JP&key=${key}`
          );
          const video = response3.data.items[0];
          this.searchedVideos.push(
            new Videos(
              video.id,
              video.snippet.publishedAt,
              video.snippet.title,
              video.snippet.description,
              video.snippet.thumbnails.high.url,
              video.snippet.channelTitle,
              video.statistics.viewCount
            )
          );
        }
        return;
      } catch (e) {
        console.log("APIerror");
      }
    }
  } //end created
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

.card {
  height: 500px;
  overflow-y: hidden;
}

.youtuber-items {
  display: flex;
  overflow-x: auto;
}
.video-items {
  display: flex;
  overflow-x: auto;
}
.item-icon {
  width: 200px;
  height: 200px;
}
.item-icon:hover {
  opacity: 0.6;
  transition-duration: 0.3s;
}
.video-description {
  height: 60px;
  width: 550px;
  overflow-wrap: break-word;
  overflow-y: scroll;
  display: block;
}
.channel-description {
  height: 200px;
  width: 260px;
  overflow-wrap: break-word;
  overflow-y: scroll;
  display: block;
}
.c-item {
  /* flex: 0 0 320px; paddingやborder含むitem全体の横幅を320pxにする */
  padding: 20px;
  margin: 10px;
  width: 300px;
}
.v-item {
  /* flex: 0 0 320px; paddingやborder含むitem全体の横幅を320pxにする */
  padding: 20px;
  margin: 10px;
}
.name-title {
  font-weight: bold;
}
</style>
