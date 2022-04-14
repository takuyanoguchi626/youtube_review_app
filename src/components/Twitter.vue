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
// import firebase from "firebase";
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { Account } from "@/types/Account";

export default {
  name: "Signin",
  data() {
    return {
      userName: "",
      photoURL: "",
      newAccount: [],
    };
  },
  methods: {
    onClick: async function () {
      const provider = new TwitterAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
          // You can use these server side with your app's credentials to access the Twitter API.
          const credential = TwitterAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const secret = credential.secret;

          // The signed-in user info.
          const user = result.user;
          // ...
          if (user) {
            console.log(result.user);
            this.userName = result.user.displayName;
            this.photoURL = result.user.photoURL;
          } else {
            alert("有効なアカウントではありません");
          }
        })
        .catch((error) => {
          alert("error");
          // // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // // The email of the user's account used.
          // const email = error.email;
          // // The AuthCredential type that was used.
          // const credential = TwitterAuthProvider.credentialFromError(error);
          // // ...
        });
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
