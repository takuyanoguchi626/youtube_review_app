<template>
  <div>
    <div>
      評価：
      <label for="1">
        <input type="radio" name="hyouka" id="1" /> <span> 1</span>
      </label>
      <label for="2">
        <input type="radio" name="hyouka" id="2" /> <span> 2</span>
      </label>
      <label for="3">
        <input type="radio" name="hyouka" id="3" /> <span> 3</span>
      </label>
      <label for="4">
        <input type="radio" name="hyouka" id="4" /> <span> 4</span>
      </label>
      <label for="5">
        <input type="radio" name="hyouka" id="5" /> <span> 5</span>
      </label>
    </div>
    <div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <button>レビューを投稿</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped></style>
