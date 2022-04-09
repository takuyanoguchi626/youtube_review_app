<template>
  <div>
    <div class="container">
      <div class="row login-page">
        <div class="col s12 z-depth-6 card-panel">
          <h4 class="pageTitle">プロフィール内容の編集</h4>
          <div class="login-form">
            <IconChange
              class="iconChange"
              @my-click="iconImage = $event"
            ></IconChange>
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
                    cols="30"
                    rows="30"
                    maxlength="500"
                    v-model="introduction"
                  ></textarea>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IconChange from "@/views/IconChange.vue";
import { collection, doc, onSnapshot, setDoc } from "@firebase/firestore";
import db from "@/firebase";
import { Account } from "@/types/Account";
import { Channels } from "@/types/Channels";
import { Review } from "@/types/Review";
import { Videos } from "@/types/Videos";

@Component({
  components: { IconChange },
})
export default class XXXComponent extends Vue {
  private name = "";
  private introduction = "";
  //DBの中のアカウントリスト
  private accountList = Array<Account>();
  //
  private accountIdByURL = 0;
  //
  private account = new Account(0, "", "", "", "", "", "", [], []);
  //
  private iconImage = "";
  //
  private forDbImage = "";

  created(): void {
    //URLから受け取ったアカウントID
    this.accountIdByURL = Number(this.$route.params.id);
    //DBからアカウント一覧を取得
    const post = collection(db, "アカウント一覧");
    onSnapshot(post, (post) => {
      const accountListByDb = post.docs.map((doc) => ({ ...doc.data() }));
      for (const account of accountListByDb) {
        const favoriteChannelList = Array<Channels>();
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
        const reviewList = Array<Review>();
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

      //URLから受け取ったIDと一致するアカウントをDBアカウント一覧から取得
      this.account = this.accountList.filter(
        (account) => account.id === this.accountIdByURL
      )[0];
      //ログイン中のアカウントのIDを取得
      const currentUserId = this.$store.getters.getCurrentUserId;
      if (this.account === undefined || this.account.id !== currentUserId) {
        this.$router.push("/404");
      }
      this.name = this.account.name;
      this.introduction = this.account.introduction;
    });
  } //end created

  //変更ボタンをクリックしたときのメソッド
  selfIntroductionChange(): void {
    // const id = Number(this.$route.params.id);

    try {
      const reviewArr = Array<any>();
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

      const channelArr = Array<any>();
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

      if (this.iconImage === "") {
        this.forDbImage = this.account.img;
      } else {
        this.forDbImage = this.iconImage;
      }

      // dbに保存
      const docRef = setDoc(
        doc(db, "アカウント一覧", String(this.account.id)),
        {
          id: this.account.id,
          name: this.name,
          introduction: this.introduction,
          img: this.forDbImage,
          mailaddless: this.account.mailaddless,
          telephone: this.account.telephone,
          password: this.account.password,
          favoriteChannelList: channelArr,
          reviewList: reviewArr,
        }
      );
      console.log("DBに保存");
      console.log(docRef);
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      console.log("Error adding document: ");
    }

    // let DbFavoriteChannelList = Array<any>();
    // let DbId = 0;
    // let DbImg = "";
    // let DbIntroduction = "";
    // let DbMailaddless = "";
    // let DbName = "";
    // let DbPassword = "";
    // let DbReviewList = Array<any>();
    // let DbTelephone = "";

    // try {
    //   const docRef = setDoc(doc(db, "アカウント一覧", String(id)), {
    //     id: id,
    //     img: DbImg,
    //     introduction: DbIntroduction,
    //     mailaddless: DbMailaddless,
    //     name: this.name,
    //     password: DbPassword,
    //     telephone: DbTelephone,
    //     favoriteChannelList: DbFavoriteChannelList,
    //     reviewList: DbReviewList,
    //   });
    //   console.log(docRef);
    //   // console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

    // this.$store.commit("changeSelfIntroduction", {
    //   id: id,
    //   name: this.name,
    //   introduction: this.introduction,
    // });
    this.$router.push(`/myProfile/${this.accountIdByURL}`);
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
