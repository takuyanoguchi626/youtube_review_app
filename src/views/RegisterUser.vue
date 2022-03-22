<template>
  <div>
    <div class="container">
      <div class="row register-page">
        <div class="col s12 z-depth-6 card-panel">
          <div class="pageTitle">会員登録</div>

          <div class="row">
            <div class="input-field col s6">
              <div class="error">{{ this.lastNameError }}</div>
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
              <div class="error">{{ this.firstNameError }}</div>
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
              <div class="error">{{ this.emailError }}</div>
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
            <div class="error">{{ errorTelephone }}</div>
            <div class="input-field col s12">
              <input id="tel" type="tel" maxlength="14" v-model="telephone" />
              <label for="tel">電話番号</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <div class="error">{{ this.passwordError }}</div>
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
              <div class="error">{{ this.passwordConfirmError }}</div>

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
  private lastName = "";
  private firstName = "";
  private email = "";
  private tel = "";
  private password = "";
  private passwordConfirm = "";
  private lastNameError = "";
  private firstNameError = "";
  private emailError = "";
  private telError = "";
  private passwordError = "";
  private passwordConfirmError = "";
  private errorChecker = false;

  public register(): void {
    this.lastNameError = "";
    this.firstNameError = "";
    this.emailError = "";
    this.telError = "";
    this.passwordError = "";
    this.passwordConfirmError = "";
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
    const accountList = this.$store.getters.getAccountList;
    const accountId = accountList.id;
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
      this.$store.commit("addNewAccount", newAccount);
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
      this.$store.commit("addNewAccount", newAccount);
    }
  }
}
</script>

<style scoped></style>
