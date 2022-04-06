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
import firebase from "firebase";

export default {
  name: "Signin",
  methods: {
    onClick: function () {
      var provider = new firebase.auth.TwitterAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          (result) => {
            var token = result.credential.token;
            var secret = result.credential.secret;
            var user = result.user;
            if (user) {
              alert("成功");
            } else {
              alert("有効なアカウントではありません");
            }
          },
          (err) => {
            alert(err.message);
          }
        );
    },
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
