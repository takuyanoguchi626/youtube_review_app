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

  created(): void {
    const id = Number(this.$route.params.id);
    // console.log(id);

    const account = this.$store.getters.getAccountById(id);
    const currentUser = this.$store.getters.getCurrentUser;
    if (account === undefined || account.id !== currentUser.id) {
      this.$router.push("/404");
    }
    this.name = account.name;
    this.introduction = account.introduction;
    console.log(this.name);
  }
  selfIntroductionChange(): void {
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
