<template>
  <div class="iconChange">
    <!-- <h4>プロフィール画像の編集</h4> -->
    <label for="iconChangeBtn">
      <img :src="image" alt="" class="circle responsive-img image" />
    </label>
    <input
      id="iconChangeBtn"
      type="file"
      ref="newImage"
      v-on:change="iconChange"
    />
    <button class="btn" @click="iconChangeButton()">画像を変更</button>
    <div>
      {{ this.message }}
    </div>
  </div>
</template>

<script>
import { collection, doc, onSnapshot, setDoc } from "@firebase/firestore";
import db from "@/firebase";
import { Account } from "@/types/Account";
import { Channels } from "@/types/Channels";
import { Review } from "@/types/Review";
import { Videos } from "@/types/Videos";
export default {
  name: "IconChange",
  data() {
    return {
      image: "",
      message: "",
      //DBの中のアカウントリスト
      accountList: [],
    };
  },
  methods: {
    iconChange() {
      const image = this.$refs.newImage.files[0];
      this.image = URL.createObjectURL(image);
    },
    iconChangeButton() {
      const id = Number(this.$route.params.id);
      // let DbImg = "";
      let DbIntroduction = "";
      let DbMailaddless = "";
      let DbName = "";
      let DbPassword = "";
      let DbTelephone = "";

      //DBからデータを取得
      onSnapshot(doc(db, "アカウント一覧", String(id)), (doc) => {
        console.log({ ...doc.data() });
        // DbImg = this.img;
        DbIntroduction = { ...doc.data() }.introduction;
        DbMailaddless = { ...doc.data() }.mailaddless;
        DbName = { ...doc.data() }.name;
        DbPassword = { ...doc.data() }.password;
        DbTelephone = { ...doc.data() }.telephone;
      });

      console.log(DbIntroduction);

      //DBへデータを格納
      try {
        const docRef = setDoc(doc(db, "アカウント一覧", String(id)), {
          id: id,
          img: this.image,
          introduction: DbIntroduction,
          mailaddless: DbMailaddless,
          name: DbName,
          password: DbPassword,
          telephone: DbTelephone,
        });
        console.log(docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      // this.$store.commit("changeAccountIcon", {
      //   id: id,
      //   img: this.image,
      // });
      this.message = "画像を変更しました！";
    },
  },
  created() {
    const id = Number(this.$route.params.id);
    // const account = this.$store.getters.getAccountById(id);
    const post = collection(db, "アカウント一覧");
    onSnapshot(post, (post) => {
      const accountListByDb = post.docs.map((doc) => ({ ...doc.data() }));
      for (const account of accountListByDb) {
        const favoriteChannelList = [];
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
        const reviewList = [];
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
      }

      const account = this.accountList.filter(
        (account) => account.id === id
      )[0];
      console.log(account);
      const currentUser = this.$store.getters.getCurrentUser;
      if (account === undefined || account.id !== currentUser.id) {
        this.$router.push("/404");
      }
      console.log(account.img);
      this.image = account.img;
    });
  },
};
</script>

<style scoped>
.iconChange {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image {
  width: 80px;
  height: 80px;
}
.image:hover {
  opacity: 0.6;
  cursor: crosshair;
}
.btn {
  margin-top: 10px;
  height: 30px;
}
#iconChangeBtn {
  padding-top: 10px;
}
</style>
