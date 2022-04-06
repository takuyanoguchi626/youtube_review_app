<template>
  <div>
    <router-link to="/top">
      <button class="button4 btn" type="button" v-on:click="onClick">
        <img
          class="button-icon"
          src="/img/2021 Twitter logo - white.png"
        /><span>&nbsp;Twitterでログイン</span>
      </button>
    </router-link>
  </div>
</template>

<script>
// import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { Account } from "@/types/Account";
// import { Channels } from "@/types/Channels";
// import { Review } from "@/types/Review";
export default {
  name: "Google",
  data() {
    return {
      userName: "",
      email: "",
      photoURL: "",
      newAccount: [],
    };
  },
  methods: {
    onClick: async function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          (result) => {
            console.log(result);
            this.userName = result.user.displayName;
            this.email = result.user.email;
            this.photoURL = result.user.photoURL;
          },
          (error) => {
            alert("ログインに失敗しました");
          }
        );
      console.log(this.userName + "/" + this.email + "/" + this.photoURL);
      // 登録されているユーザー情報の取得
      const accountLastId = this.$store.getters.getLastUserId;
      // 現在のアカウントリスト
      const currentAccountList = this.$store.getters.getAccountList;
      console.log(currentAccountList);
      // 新たなユーザーに使用するID
      let newUserId = 0;
      // 既にログインしたことのあるアカウントの判別
      for (let i = 0; i < currentAccountList.length; i++) {
        if (currentAccountList[i].mailaddless === this.email) {
          newUserId = currentAccountList[i].id;
          console.log(newUserId);
          this.$router.push(`/myProfile/${newUserId}`);
          this.$store.commit("addCurrentUser", currentAccountList[i]);
          return;
        }
      }
      // idが既に存在する場合と存在しない場合で新たに付与するidを分ける
      if (accountLastId === 0) {
        this.newAccount = new Account(
          1,
          this.userName,
          "",
          this.photoURL,
          this.email,
          "",
          "",
          [],
          []
        );
        newUserId = this.newAccount.id;
        this.$store.commit("addUser", this.newAccount);
        this.$store.commit("addCurrentUser", this.newAccount);
        this.$store.commit("addLastUserId", newUserId);
      } else {
        this.newAccount = new Account(
          accountLastId + 1,
          this.userName,
          "",
          this.photoURL,
          this.email,
          "",
          "",
          [],
          []
        );
        newUserId = this.newAccount.id;
        this.$store.commit("addUser", this.newAccount);
        this.$store.commit("addCurrentUser", this.newAccount);
        this.$store.commit("addLastUserId", newUserId);
      }
    },
    // firebase.auth().signOut();
  },
};
</script>

<style scoped>
.button4 {
  position: absolute;
  top: 70%;
  left: 72%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: cornflowerblue;
  border: none;
}
.button4:hover {
  opacity: 0.6;
  transition-duration: 0.3s;
}
.button4 span {
  color: white;
}
.button-icon {
  width: 15px;
  height: 15px;
}
.top-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
</style>
