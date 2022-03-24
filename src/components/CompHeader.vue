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
import { Component, Vue } from "vue-property-decorator";

@Component
export default class XXXComponent extends Vue {
  private searchText = "";

  search(searchText: string): void {
    console.log(searchText);

    // 現在のパスを検出
    let path = location.pathname;
    console.log(path);
    if (path !== `/searchedList/${searchText}`) {
      // ドメイン以下のパス名が /searchedList/${searchText} の場合に実行する処理
      this.$router.push(`/searchedList/${searchText}`);
    }
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
