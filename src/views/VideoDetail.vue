<template>
  <div class="container">
    <div class="video" v-for="video of videoDetail" :key="video.id">
      <iframe
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/' + video.id"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>{{ video.title }}</div>
      <span>{{ video.publishedAt }}</span>
      <div>{{ video.channelTitle }}</div>
    </div>

    <div class="review">
      <add-review :video="video"></add-review>
      <div class="row">
        <div class="col s12">
          <div class="card content">
            <span class="card-image">
              <img src="/img/東海オンエア.jpeg" />
              <span class="card-title">アイコン</span>
            </span>
            <div class="card-content content">
              <div class="content">投稿者名</div>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="card content">
            <span class="card-image">
              <img src="/img/東海オンエア.jpeg" />
              <span class="card-title">アイコン</span>
            </span>
            <div class="card-content content">
              <div class="content">投稿者名</div>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddReview from "@/components/AddReview.vue";
import axios from "axios";
import { Videos } from "@/types/Videos";
@Component({
  components: { AddReview },
})
export default class XXXComponent extends Vue {
  private videoDetail: Array<Videos> = [];
  private video = new Videos(1, "ss", "ss", "ss", "/img/pagu.jpg", "ss", "ss");

  async created(): Promise<void> {
    const videoId = this.$route.params.id;
    const key = "AIzaSyChyFfGpQSYRhWTBuyeXTflkqTd4Sgc1HU";
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${key}&id=${videoId}`
    );
    const responceVideo = response.data.items[0];
    console.log(responceVideo);
    this.videoDetail.push(
      new Videos(
        responceVideo.id,
        responceVideo.snippet.publishedAt,
        responceVideo.snippet.title,
        responceVideo.snippet.description,
        responceVideo.snippet.thumbnails.medium.url,
        responceVideo.channelTitle,
        responceVideo.tags
      )
    );
  }
}
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
.content {
  display: flex;
}
.card-content {
  flex-direction: column;
}
</style>
