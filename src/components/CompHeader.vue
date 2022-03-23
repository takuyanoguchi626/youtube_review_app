<template>
  <div>
    <header class="no-padding">
      <div class="navbar-fixed">
        <nav class="navfeature grey darken-3">
          <div class="headerContainer nav-wrapper">
            <router-link to="/top">
              <span class="hide-on-small-only"
                ><img
                  src="/img/youtubeLogo.png"
                  width="30"
                  id="appicon"
                  style="
                    vertical-align: middle;
                    margin-bottom: 10px;
                    margin-right: 10px;
                  "
              /></span>
              <span
                id="header-large"
                style="font-weight: 300; font-size: 1.3rem"
                >Youtube Reviewer</span
              >
            </router-link>
            <div class="row text">
              <form class="col s12 searchForm">
                <div class="row">
                  <span class="input-field col s12">
                    <textarea
                      id="searchBox"
                      class="materialize-textarea"
                      value="searchText"
                      v-model="searchText"
                    ></textarea>
                  </span>
                </div>
                <button type="button" v-on:click="search(searchText)">
                  検索
                </button>
              </form>
            </div>
            <ul
              id="nav-mobile"
              class="hide-on-med-and-down right menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-24"
            >
              <li
                id="menu-item-24"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-24"
              >
                <router-link to="/login" aria-current="page"
                  >ログイン</router-link
                >
              </li>
              <li
                id="menu-item-24"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-24"
              >
                <router-link to="/registerUser" aria-current="page"
                  >会員登録</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";
import { Videos } from "@/types/Videos";
@Component
export default class XXXComponent extends Vue {
  private searchText = "";

  async search(searchText: string): Promise<void> {
    console.log(searchText);

    const response1 = await axios.get(
      // ビデオの検索API
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyByE-aaIhWOBWxX0MdlUN6szX6qMe7kX5s&type=video&part=snippet&q=${searchText}`
    );
    console.dir("レスポンスデータ" + response1.data);
    const payload1 = response1.data;
    this.$store.commit("addSearchData", payload1);
    const response2 = await axios.get(
      // チャンネルの検索API
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyByE-aaIhWOBWxX0MdlUN6szX6qMe7kX5s&type=channnels&part=snippet&q=${searchText}`
    );
    console.dir("レスポンスデータ" + response2.data);
    const payload2 = response2.data;

    const channelItems = payload2.items;
    console.dir(JSON.stringify(channelItems));
    for (let channel of channelItems) {
      const channelId = channel.id.channelId;
      console.dir(JSON.stringify(channelId));
      const response3 = await axios.get(
        // チャンネル検索で取得できなかった登録者数などの情報を取得するAPI
        `https://www.googleapis.com/youtube/v3/channels?key=AIzaSyByE-aaIhWOBWxX0MdlUN6szX6qMe7kX5s&part=snippet,contentDetails,statistics,status&id=${channelId}`
      );
      console.dir(JSON.stringify(response3));
    }

    const payload = payload1 + payload2;
    this.$store.commit("addSearchData", payload);

    this.$router.push("/searchedList");
  }
}
</script>

<style scoped>
.header-logo {
  display: flexbox;
}
.headerContainer {
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
}
.searchForm {
  display: flex;
}
textarea {
  width: 350px;
}
</style>
