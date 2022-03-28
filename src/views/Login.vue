<template>
  <div>
    <div class="container">
      <div class="row login-page">
        <div class="col s12 z-depth-6 card-panel">
          <div class="pageTitle">ログイン</div>
          <div class="error">{{ loginError }}</div>
          <form class="login-form" action="employeeList.html">
            <div class="row"></div>
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">mail_outline</i>
                <input
                  class="validate"
                  id="mailAddress"
                  type="email"
                  v-model="email"
                />
                <label for="mailAddress" data-error="wrong" data-success="right"
                  >メールアドレス</label
                >
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">lock_outline</i>
                <input id="password" type="password" v-model="password" />
                <label for="password">パスワード</label>
              </div>
            </div>
            <div class="row login-btn">
              <button class="btn" type="button" v-on:click="login()">
                <span>ログイン</span>
              </button>
            </div>
            <div class="row">
              <div class="input-field col s6 m6 l6">
                <p class="margin medium-small">
                  <router-link to="/registerUser">会員登録はこちら</router-link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Account } from "@/types/Account";
@Component
export default class XXXComponent extends Vue {
  // メールアドレス
  private email = "";
  // パスワード
  private password = "";
  // エラー文
  private loginError = "";

  /**
   * ログイン.
   */
  public login(): void {
    this.loginError = "";
    const accountList = this.$store.getters.getAccountList;
    console.log(this.email);
    console.log(this.password);
    console.log(accountList);

    for (const account of accountList) {
      if (
        account.mailaddless === this.email &&
        account.password === this.password
      ) {
        const currentAccount = new Account(
          account.id,
          account.name,
          account.introduction,
          account.img,
          account.mailaddless,
          account.telephone,
          account.password,
          account.favoriteChannelList,
          account.reviewList
        );
        console.log(currentAccount);

        this.$store.commit("addCurrentUser", currentAccount);
        console.dir(JSON.stringify(this.$store.state.currentUser));
        this.$router.push("/top");
        return;
      }
    }
    console.log(this.$store.state.currentUser);

    this.loginError = "メールアドレスまたはパスワードが誤っています";
  }
}
</script>

<style scoped></style>
