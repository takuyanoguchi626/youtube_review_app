<template>
  <div>
    <div class="container">
      <div class="row register-page">
        <div class="col s12 z-depth-6 card-panel">
          <div class="pageTitle">会員登録</div>

          <div class="row">
            <div class="input-field col s6">
              <div class="error">{{ lastNameError }}</div>
              <input
                id="last_name"
                type="text"
                class="validate"
                v-model="lastName"
                required
              />
              <label for="last_name">姓</label>
            </div>
            <div class="input-field col s6">
              <div class="error">{{ firstNameError }}</div>
              <input
                id="first_name"
                type="text"
                class="validate"
                v-model="firstName"
                required
              />
              <label for="first_name">名</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <div class="error">{{ emailError }}</div>
              <input
                id="email"
                type="email"
                class="validate"
                v-model="email"
                required
              />
              <label for="email">メールアドレス</label>
            </div>
          </div>
          <div class="row">
            <div class="error">{{ telError }}</div>
            <div class="input-field col s12">
              <input id="tel" type="tel" maxlength="14" v-model="tel" />
              <label for="tel">電話番号</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <div class="error">{{ passwordError }}</div>
              <input
                id="password"
                type="password"
                class="validate"
                minlength="8"
                v-model="password"
                required
              />
              <label for="password">パスワード</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <div class="error">{{ passwordConfirmError }}</div>

              <input
                id="confirmation_password"
                type="password"
                class="validate"
                minlength="8"
                v-model="passwordConfirm"
                required
              />
              <label for="confirmation_password">確認用パスワード</label>
            </div>
          </div>
          <div class="row register-admin-btn">
            <button class="btn" type="button" v-on:click="register()">
              <span>登録<i class="material-icons right">done</i></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Account } from "@/types/Account";
import { Channels } from "@/types/Channels";
import { Review } from "@/types/Review";
@Component
export default class XXXComponent extends Vue {
  // 姓
  private lastName = "";
  // 名前
  private firstName = "";
  // メールアドレス
  private email = "";
  // 電話番号
  private tel = "";
  // パスワード
  private password = "";
  // 確認用パスワード
  private passwordConfirm = "";
  // 姓のエラー文
  private lastNameError = "";
  // 名のエラー文
  private firstNameError = "";
  // メールアドレスのエラー文
  private emailError = "";
  // 電話番号のエラー文
  private telError = "";
  // パスワードのエラー文
  private passwordError = "";
  // 確認用パスワードのエラー文
  private passwordConfirmError = "";
  // エラーチェッカー
  private errorChecker = false;

  /**
   * ユーザー登録情報をstoreに送る.
   */
  public register(): void {
    // 空にする
    this.lastNameError = "";
    this.firstNameError = "";
    this.emailError = "";
    this.telError = "";
    this.passwordError = "";
    this.passwordConfirmError = "";
    // エラーハンドリング
    if (this.lastName === "") {
      this.lastNameError = "姓を入力してください";
      this.errorChecker = true;
    }
    if (this.firstName === "") {
      this.firstNameError = "名を入力してください";
      this.errorChecker = true;
    }
    if (this.email === "") {
      this.emailError = "メールアドレスを入力してください";
      this.errorChecker = true;
    }
    if (this.tel === "") {
      this.telError = "電話番号を入力してください";
      this.errorChecker = true;
    }
    if (this.password === "") {
      this.passwordError = "パスワードを入力してください";
      this.errorChecker = true;
    }
    if (this.passwordConfirm === "") {
      this.passwordConfirmError = "確認用パスワードを入力してください";
      this.errorChecker = true;
    }
    if (this.password !== "" && this.password !== this.passwordConfirm) {
      this.passwordError = "パスワードと確認用パスワードが異なります";
      this.errorChecker = true;
    }
    if (this.errorChecker === true) {
      this.errorChecker = false;
      return;
    }
    // 登録されているユーザー情報の取得
    const accountList = this.$store.getters.getAccountList;
    const accountId = accountList.id;
    // idが既に存在する場合と存在しない場合で新たに付与するidを分ける
    if (accountId === undefined) {
      const newAccount = new Account(
        0,
        this.lastName + this.firstName,
        "",
        "",
        this.email,
        this.tel,
        this.password,
        new Array<Channels>(),
        new Array<Review>()
      );
      this.$store.commit("addUser", newAccount);
    } else {
      const newAccount = new Account(
        accountList[accountList.length - 1].id + 1,
        this.lastName + this.firstName,
        "",
        "",
        this.email,
        this.tel,
        this.password,
        new Array<Channels>(),
        new Array<Review>()
      );
      this.$store.commit("addUser", newAccount);
    }
    console.log(accountList);
  }
}
</script>

<style scoped></style>
