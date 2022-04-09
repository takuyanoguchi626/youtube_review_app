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
    <button type="button" class="btn" @click="iconChangeButton()">
      画像を変更
    </button>
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
      account: new Account(0, "", "", "", "", "", "", [], []),
    };
  },
  methods: {
    iconChange() {
      const image = this.$refs.newImage.files[0];
      this.image = URL.createObjectURL(image);
      console.log(this.image);
    },

    iconChangeButton() {
      this.$emit("my-click", this.image);
      // const id = Number(this.$route.params.id);
      // let DbImg = "";
      // let DbIntroduction = "";
      // let DbMailaddless = "";
      // let DbName = "";
      // let DbPassword = "";
      // let DbTelephone = "";

      //DBからデータを取得
      // onSnapshot(doc(db, "アカウント一覧", String(id)), (doc) => {
      //   console.log({ ...doc.data() });
      //   // DbImg = this.img;
      //   DbIntroduction = { ...doc.data() }.introduction;
      //   DbMailaddless = { ...doc.data() }.mailaddless;
      //   DbName = { ...doc.data() }.name;
      //   DbPassword = { ...doc.data() }.password;
      //   DbTelephone = { ...doc.data() }.telephone;
      // });

      // console.log(DbIntroduction);

      //DBへデータを格納
      // try {
      //   const docRef = setDoc(doc(db, "アカウント一覧", String(id)), {
      //     id: id,
      //     img: this.image,
      //     introduction: DbIntroduction,
      //     mailaddless: DbMailaddless,
      //     name: DbName,
      //     password: DbPassword,
      //     telephone: DbTelephone,
      //   });
      //   console.log(docRef);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }

      try {
        const reviewArr = [];
        for (const review of this.account.reviewList) {
          if (review.favoriteCount === undefined) {
            reviewArr.push({
              reviewDate: review.reviewDate,
              reviewId: review.reviewId,
              accountId: review.accountId,
              videos: {
                id: review.videos.id,
                publishedAt: review.videos.publishedAt,
                title: review.videos.title,
                description: review.videos.description,
                thumbnailsUrl: review.videos.thumbnailsUrl,
                channelTitle: review.videos.channelTitle,
                viewCount: review.videos.viewCount,
              },
              evaluation: review.evaluation,
              review: review.review,
              favoriteCount: [],
            });
          } else {
            reviewArr.push({
              reviewDate: review.reviewDate,
              reviewId: review.reviewId,
              accountId: review.accountId,
              videos: {
                id: review.videos.id,
                publishedAt: review.videos.publishedAt,
                title: review.videos.title,
                description: review.videos.description,
                thumbnailsUrl: review.videos.thumbnailsUrl,
                channelTitle: review.videos.channelTitle,
                viewCount: review.videos.viewCount,
              },
              evaluation: review.evaluation,
              review: review.review,
              favoriteCount: review.favoriteCount,
            });
          }
        }

        const channelArr = [];
        for (const channel of this.account.favoriteChannelList) {
          channelArr.push({
            id: channel.id,
            title: channel.title,
            description: channel.description,
            publishedAt: channel.publishedAt,
            thumbnailsUrl: channel.thumbnailsUrl,
            viewCount: channel.viewCount,
            subscriberCount: channel.subscriberCount,
            videoCount: channel.videoCount,
          });
        }

        // dbに保存
        const docRef = setDoc(
          doc(db, "アカウント一覧", String(this.account.id)),
          {
            id: this.account.id,
            name: this.account.name,
            introduction: this.account.introduction,
            img: this.image,
            mailaddless: this.account.mailaddless,
            telephone: this.account.telephone,
            password: this.account.password,
            favoriteChannelList: channelArr,
            reviewList: reviewArr,
          }
        );
        console.log("DBに保存");
        console.log(docRef);
        console.log(this.account);

        onSnapshot(
          doc(db, "アカウント一覧", String(this.account.id)),
          (doc) => {
            this.image = { ...doc.data() }.img;
            console.log("image" + this.image);
          }
        );

        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        console.log("Error adding document: ");
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

      this.account = this.accountList.filter(
        (account) => Number(account.id) === id
      )[0];
      console.log(this.account.img);
      const currentUserId = this.$store.getters.getCurrentUserId;
      if (this.account === undefined || this.account.id !== currentUserId) {
        this.$router.push("/404");
      }
      this.image = this.account.img;
      console.log(this.image);
      // this.$emit("aaa", this.image);
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
