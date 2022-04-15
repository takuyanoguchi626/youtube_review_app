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
import { Videos } from "@/types/Videos";
import db from "@/firebase";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
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
  //DBの中のアカウントリスト
  private accountList = Array<Account>();
  //最後に登録したアカウントのID(DBから取得する)
  private accountLastId = 0;

  created(): void {
    // スクロールトップボタン
    scrollTop(1); // 遅すぎるとガクガクになるので注意
    function scrollTop(duration: number) {
      let currentY = window.pageYOffset; // 現在のスクロール位置を取得
      let step = duration / currentY > 1 ? 10 : 100; // 三項演算子
      let timeStep = (duration / currentY) * step; // スクロール時間
      let intervalId = setInterval(scrollUp, timeStep);
      // timeStepの間隔でscrollUpを繰り返す。
      // clearItervalのために返り値intervalIdを定義する。
      function scrollUp() {
        currentY = window.pageYOffset;
        if (currentY === 0) {
          clearInterval(intervalId); // ページ最上部に来たら終了
        } else {
          scrollBy(0, -step); // step分上へスクロール
        }
      }
    } //end scrollTop
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
      } //end for accountListByDb
    });
    //DBからアカウントラストＩＤを取得
    onSnapshot(doc(db, "アカウントラストID", "アカウントラストID"), (doc) => {
      this.accountLastId = { ...doc.data() }.accountLastId;
    });
  } //end created
  /**
   * ユーザー登録情報をDBに送る.
   */
  public register(): void {
    // エラーメッセージを空にする
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
    // 既に登録されたメールアドレスが入力された時にエラーを出す
    for (const account of this.accountList) {
      if (this.email === account.mailaddless) {
        this.emailError = "既に登録されたメールアドレスが入力されています";
        this.errorChecker = true;
      }
    }
    //１つでもエラーがあれば処理を中断する.
    if (this.errorChecker === true) {
      this.errorChecker = false;
      return;
    }
    const videoId = this.$route.params.id;
    // 新たなユーザーに使用するID
    let newUserId = 0;
    //新たなユーザーの情報（DBから格納する）
    let newAccount = new Account(
      0,
      this.lastName + this.firstName,
      "",
      "",
      "",
      "",
      "",
      new Array<Channels>(),
      new Array<Review>()
    );
    // idが既に存在する場合と存在しない場合で新たに付与するidを分ける
    if (this.accountLastId === 0) {
      newAccount = new Account(
        1,
        this.lastName + this.firstName,
        "",
        "/img/egg.png",
        this.email,
        this.tel,
        this.password,
        new Array<Channels>(),
        new Array<Review>()
      );
    } else {
      newAccount = new Account(
        this.accountLastId + 1,
        this.lastName + this.firstName,
        "",
        "/img/egg.png",
        this.email,
        this.tel,
        this.password,
        new Array<Channels>(),
        new Array<Review>()
      );
    }
    //作成したアカウントのIDを取得する
    newUserId = newAccount.id;
    //DBのアカウントラストIDを更新する
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
        id: newAccount.id,
        name: newAccount.name,
        introduction: newAccount.introduction,
        img: newAccount.img,
        mailaddless: newAccount.mailaddless,
        telephone: newAccount.telephone,
        password: newAccount.password,
        favoriteChannelList: [],
        reviewList: [],
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // this.$router.push("/login");
    this.$router.push(`/2login/${videoId}`);
  } //end register
}
</script>

<style scoped></style>
