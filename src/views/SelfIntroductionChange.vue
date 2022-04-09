<template>
  <div>
    <div class="container">
      <div class="row login-page">
        <div class="col s12 z-depth-6 card-panel">
          <h4 class="pageTitle">プロフィール内容の編集</h4>
          <div class="login-form">
            <!-- <IconChange class="iconChange"></IconChange> -->
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
                    id=""
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
      const account = this.accountList.filter(
        (account) => account.id === this.accountIdByURL
      )[0];
      //ログイン中のアカウントのIDを取得
      const currentUserId = this.$store.getters.getCurrentUserId;
      if (account === undefined || account.id !== currentUserId) {
        this.$router.push("/404");
      }
      this.name = account.name;
      this.introduction = account.introduction;
    });
  } //end created

  //変更ボタンをクリックしたときのメソッド
  selfIntroductionChange(): void {
    const id = Number(this.$route.params.id);

    onSnapshot(doc(db, "アカウント一覧", String(id)), (docs) => {
      console.log({ ...docs.data() });
      // try {
      //   const docRef = setDoc(doc(db, "アカウント一覧", String(id)), {
      //     id: { ...docs.data() }.id,
      //     img: { ...docs.data() }.img,
      //     introduction: this.introduction,
      //     mailaddless: { ...docs.data() }.mailaddless,
      //     name: this.name,
      //     password: { ...docs.data() }.password,
      //     telephone: { ...docs.data() }.telephone,
      //   });
      //   console.log(docRef);
      //   // console.log("Document written with ID: ", docRef.id);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
    });

    // this.$store.commit("changeSelfIntroduction", {
    //   id: id,
    //   name: this.name,
    //   introduction: this.introduction,
    // });
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
