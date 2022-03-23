<template>
  <div>
    <div>名前：<input type="text" v-model="name" /></div>
    <div>自己紹介文：<input type="text" v-model="introduction" /></div>
    <div>
      <button @click="selfIntroductionChange()">変更</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private name = "";
  private introduction = "";

  created() {
    const id = Number(this.$route.params.id);
    const account = this.$store.getters.getAccountById(id);
    this.name = account.name;
    this.introduction = account.introduction;
    console.log(this.name);
  }
  selfIntroductionChange() {
    const id = Number(this.$route.params.id);
    this.$store.commit("changeSelfIntroduction", {
      id: id,
      name: this.name,
      introduction: this.introduction,
    });
    this.$router.push(`/myProfile/${id}`);
  }
}
</script>

<style scoped></style>
