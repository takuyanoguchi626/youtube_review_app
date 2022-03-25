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
                <div class="item col card white">
                  <div class="item-icon">
                    <img v-bind:src="searchedChannel.thumbnailsUrl" />
                  </div>
                  <router-link :to="'/channelDetail/' + searchedChannel.id">{{
                    searchedChannel.title
                  }}</router-link
                  ><br />
                  <span class="title"></span>登録者数{{
                    searchedChannel.subscriberCount
                  }}<br />
                  <span class="title"></span>総動画数{{
                    searchedChannel.videoCount
                  }}<br />
                  <span class="title"></span>説明{{ searchedChannel.description
                  }}<br />
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
                    <div class="item col card white">
                      <div class="item-icon">
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
                        v-bind:to="'/videoDetail/' + searchedVideo.id"
                        >{{ searchedVideo.title }}</router-link
                      ><br />
                      <span class="title"></span>{{ searchedVideo.publishedAt
                      }}<br />
                      <span class="title"></span>{{ searchedVideo.channelTitle
                      }}<br />
                      <span class="title"></span>{{ searchedVideo.description
                      }}<br />
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
@Component
export default class XXXComponent extends Vue {
  private searchedVideos: Array<Videos> = [];
  private searchedChannels = new Array<Channels>();
  private channelIdList = new Array<string>();
  private key = "AIzaSyBOMUoWdabc9lzK4XQFop3x0dYtUeI6agU";
  private searchText = "";

  async created(): Promise<void> {
    this.searchText = this.$route.params.searchText;
    console.log(this.searchText);
    const response1 = await axios.get(
      // ビデオの検索API
      `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&maxResults=10&regionCode=JP&key=${this.key}&q=${this.searchText}`
    );
    const payload1 = response1.data.items;
    console.dir("レスポンスデータ" + payload1);

    for (let video of payload1) {
      this.searchedVideos.push(
        new Videos(
          video.id.videoId,
          video.snippet.publishedAt,
          video.snippet.title,
          video.snippet.description,
          video.snippet.thumbnails.default.url,
          video.snippet.channelTitle,
          video.snippet.tags
        )
      );
      console.log(this.searchedVideos);
    }
    const response2 = await axios.get(
      // チャンネルの検索API
      `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&maxResults=10&regionCode=JP&key=${this.key}&q=${this.searchText}`
    );
    const channel1Items = response2.data.items;
    console.log(channel1Items);

    for (const item of channel1Items) {
      console.dir("item" + JSON.stringify(item));
      console.log("ChannelId" + item.snippet.channelId);

      this.channelIdList.push(item.snippet.channelId);
    }
    console.log("channelIdList" + this.channelIdList);

    for (let channelId of this.channelIdList) {
      const response3 = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?key=${this.key}&maxResults=10&part=snippet,contentDetails,statistics,status&id=${channelId}`
      );
      const channel2Items = response3.data.items;
      for (let channel2Item of channel2Items) {
        this.searchedChannels.push(
          new Channels(
            channel2Item.id,
            channel2Item.snippet.title,
            channel2Item.snippet.description,
            channel2Item.snippet.publishedAt,
            channel2Item.snippet.thumbnails.default.url,
            channel2Item.statistics.viewCount,
            channel2Item.statistics.subscriberCount,
            channel2Item.statistics.videoCount
          )
        );
      }
    }
    console.log(this.searchedChannels);
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

.item {
  /* flex: 0 0 320px; paddingやborder含むitem全体の横幅を320pxにする */
  padding: 20px;
  margin: 10px;
}
</style>
