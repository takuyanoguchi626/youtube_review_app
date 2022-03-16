<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/iconChange">IconChange</router-link> |
      <router-link to="/registerUser">RegisterUser</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/top">Top</router-link> |
      <router-link to="/videoDetail">VideoDetail</router-link> |
      <router-link to="/youtuberDetail">YoutuberDetail</router-link>
      <router-link to="/myProfile">MyProfile</router-link>|
      <router-link to="/selfIntroductionChange"
        >SelfIntroductionChange</router-link
      >
      |
    </div>
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import M from "materialize-css/dist/js/materialize.min";
import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";

@Component({
  components: {
    Header,
    // Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
