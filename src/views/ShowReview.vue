<template>
  <div>
    <div class="row">
      <div class="col s12 m7">
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped>
.content {
  display: flex;
}
.card-content {
  flex-direction: column;
}
</style>
