<template>
  <div>
    <header class="no-padding">
      <div class="navbar-fixed">
        <nav class="navfeature grey darken-3">
          <div class="container nav-wrapper">
            <a
              href="https://www.android-kiosk.com"
              class="header-logo waves-effect waves-light"
            >
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
            </a>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <textarea
                      id="textarea1"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="textarea1">Textarea</label>
                  </div>
                </div>
              </form>
            </div>
            <ul
              id="nav-mobile"
              class="hide-on-med-and-down right menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-24"
            >
              <li class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea
                        id="textarea1"
                        class="materialize-textarea"
                      ></textarea>
                      <label for="textarea1">Textarea</label>
                    </div>
                  </div>
                </form>
              </li>
              <li
                id="menu-item-24"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-24"
              >
                <a href="https://www.android-kiosk.com/" aria-current="page"
                  >リンクボタン</a
                >
              </li>
              <li
                id="menu-item-24"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-24"
              >
                <a href="https://www.android-kiosk.com/" aria-current="page"
                  >リンクボタン</a
                >
              </li>
            </ul>
            <a href="#" data-activates="slide-out" class="button-collapse"
              ><i class="mdi mdi-menu"></i
            ></a>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped>
.header-logo {
  display: flexbox;
}
</style>
