<template>
  <div>
    <router-link to="/top">
      <button class="button2 btn" type="button" v-on:click="onClick">
        <img class="button-icon" src="/img/google.png" /><span
          >&nbsp;Googleでログイン</span
        >
      </button>
    </router-link>
  </div>
</template>

<script lang="js">
import { getAuth,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { Account } from "@/types/Account";
import { Channels } from "@/types/Channels";
import { Review } from "@/types/Review";
import { Videos } from "@/types/Videos";
import db from "@/firebase";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
// import { Component, Vue } from "vue-property-decorator";
// import firebase from "firebase";
// import {firebase} from "firebase";
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
      accountList:[],
      accountLastId:0,
      currentUserId:0
    };
  },
  methods: {
    onClick: async function () {
      this.currentUserId=this.$store.getters.getCurrentUserId
      if(this.currentUserId!==0){
        alert("ログアウトしてください")
        return
      }
      const provider = new GoogleAuthProvider();
      const auth =getAuth()
      await signInWithPopup(auth, provider)
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
      // const accountLastId = this.$store.getters.getLastUserId;
      // 現在のアカウントリスト
      // const currentAccountList = this.$store.getters.getAccountList;
      console.log(this.accountList);
      // 新たなユーザーに使用するID
      let newUserId = 0;
      // 既にログインしたことのあるアカウントの判別
      for (let i = 0; i < this.accountList.length; i++) {
        if (this.accountList[i].mailaddless === this.email) {
          newUserId = this.accountList[i].id;
          console.log(newUserId);
          this.$store.commit("addCurrentUserId", this.accountList[i]);
          this.$router.push(`/myProfile/${newUserId}`);
          return;
        }
      }
      // idが既に存在する場合と存在しない場合で新たに付与するidを分ける
      if (this.accountLastId === 0) {
        this.newAccount = new Account(
          1,
          this.userName,
          "",
          this.photoURL,
          this.email,
          "",
          "passwordpeirghowfowdkfmowdifowkfowdifhs",
          [],
          []
        );
        newUserId = this.newAccount.id;
        // this.$store.commit("addUser", this.newAccount);
        this.$store.commit("addCurrentUserId", this.newAccount);
        // this.$store.commit("addLastUserId", newUserId);
      } else {
        this.newAccount = new Account(
          this.accountLastId + 1,
          this.userName,
          "",
          this.photoURL,
          this.email,
          "",
          "passwordpeirghowfowdkfmowdifowkfowdifhs",
          [],
          []
        );
        newUserId = this.newAccount.id;
        // this.$store.commit("addUser", this.newAccount);
        this.$store.commit("addCurrentUserId", this.newAccount);
        // this.$store.commit("addLastUserId", newUserId);
      }
       try {
      setDoc(doc(db, "アカウントラストID", "アカウントラストID"), {
        accountLastId: Number(newUserId),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
     //DBにアカウントを保存
    try {
      setDoc(doc(db, "アカウント一覧", String(newUserId)), {
        id: this.newAccount.id,
        name: this.newAccount.name,
        introduction: this.newAccount.introduction,
        img: this.newAccount.img,
        mailaddless: this.newAccount.mailaddless,
        telephone: this.newAccount.telephone,
        password: this.newAccount.password,
        favoriteChannelList: [],
        reviewList: [],
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    },
    // firebase.auth().signOut();
  },
mounted() {
  //DBからアカウント一覧を取得
    const post = collection(db, "アカウント一覧");
    onSnapshot(post, (post) => {
      const accountListByDb = post.docs.map((doc) => ({ ...doc.data() }));
      for (const account of accountListByDb) {
        const favoriteChannelList = []
        for (const channel of account.favoriteChannelList) {
          favoriteChannelList.push(
            new Channels(
              channel.id,
              channel.title,
              channel.description,
              channel.publishedAt,
              channel.thumbnailsUrl,
              channel.viewCount,
              channel.subscriberCount,
              channel.videoCount
            )
          );
        }
        const reviewList = []
        for (const review of account.reviewList) {
          reviewList.push(
            new Review(
              review.reviewDate,
              review.reviewId,
              review.accountId,
              new Videos(
                review.videos.id,
                review.videos.publishedAt,
                review.videos.title,
                review.videos.description,
                review.videos.thumbnailsUrl,
                review.videos.channelTitle,
                review.videos.viewCount
              ),
              review.evaluation,
              review.review,
              review.favoriteCount
            )
          );
        }
        this.accountList.push(
          new Account(
            account.id,
            account.name,
            account.introduction,
            account.img,
            account.mailaddless,
            account.telephone,
            account.password,
            favoriteChannelList,
            reviewList
          )
        );
      } //end for accountListByDb
    });
    //DBからアカウントラストＩＤを取得
    onSnapshot(doc(db, "アカウントラストID", "アカウントラストID"), (doc) => {
      this.accountLastId = { ...doc.data() }.accountLastId;
    });
},
};
</script>

<style scoped>
.button2 {
  position: absolute;
  top: 50%;
  left: 72%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: white;
}
.button2:hover {
  opacity: 0.6;
  transition-duration: 0.3s;
}
.button2 span {
  color: black;
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
