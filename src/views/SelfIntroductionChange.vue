<template>
  <div>
    <div class="container">
      <div class="row login-page">
        <div class="col s12 z-depth-6 card-panel">
          <h4 class="pageTitle">プロフィール内容の編集</h4>
          <!-- <form action="#"> -->
          <div class="login-form">
            <!-- <div> -->
            <IconChange class="iconChange"></IconChange>
            <!-- </div> -->
            <div class="context">
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">person</i>
                  <input
                    class="validate"
                    id="mailAddress"
                    type="text"
                    v-model="name"
                  />
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">short_text</i>
                  <textarea
                    name=""
                    id="password"
                    cols="30"
                    rows="10"
                    v-model="introduction"
                  ></textarea>
                  <!-- <input id="password" type="text" v-model="introduction" /> -->
                </div>
              </div>
              <div class="row login-btn">
                <button
                  class="btn"
                  type="button"
                  v-on:click="selfIntroductionChange()"
                >
                  <span>変更</span>
                </button>
              </div>
            </div>
          </div>
          <!-- </form> -->
        </div>
      </div>
    </div>
  </div>

  <!-- <div>
    <div>名前：<input type="text" v-model="name" /></div>
    <div>自己紹介文：<input type="text" v-model="introduction" /></div>
    <div>
      <button @click="selfIntroductionChange()">変更</button>
    </div>
  </div> -->
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IconChange from "@/views/IconChange.vue";
@Component({
  components: { IconChange },
})
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

<style scoped>
.context {
  /* display: flex;
  flex-direction: column; */
  width: 600px;
}
.iconChange {
  width: 300px;
  /* height: 500px; */
}
.login-form {
  display: flex;
  /* flex-direction: column; */
}
</style>
