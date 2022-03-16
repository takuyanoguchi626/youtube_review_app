<template>
  <div>
    <header class="no-padding">
      <div class="navbar-fixed">
        <nav class="navfeature grey darken-3">
          <div class="container nav-wrapper">
            <a
              href="https://www.android-kiosk.com"
              class="waves-effect waves-light"
            >
              <span class="hide-on-small-only"
                ><img
                  src="https://www.android-kiosk.com/wp-content/themes/androidkioskcom/images/brand__white.png"
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
                >Android Kiosk</span
              >
            </a>

            <ul id="nav-mobile" class="hide-on-med-and-down right">
              <li
                id="menu-item-24"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-24"
              >
                <a href="https://www.android-kiosk.com/" aria-current="page"
                  >App</a
                >
              </li>
              <li
                id="menu-item-1252"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1252"
              >
                <a href="https://www.android-kiosk.com/remote-management/"
                  >Remote Management</a
                >
              </li>
              <li
                id="menu-item-1253"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1253"
              >
                <a href="#features">Features</a>
              </li>
              <li
                id="menu-item-1150"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1150"
              >
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://kioskbrowser.crisp.help"
                  >Help</a
                >
              </li>
              <li
                id="menu-item-1263"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1263"
              >
                <a href="https://www.android-kiosk.com/contact-us/">Contact</a>
              </li>
            </ul>
            <a href="#" data-activates="slide-out" class="button-collapse"
              ><i class="mdi mdi-menu"></i
            ></a>
          </div>
        </nav>
      </div>
      <div class="side-nav-start">
        <ul id="slide-out" class="side-nav">
          <li
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-24"
          >
            <a href="https://www.android-kiosk.com/" aria-current="page">App</a>
          </li>
          <li
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1252"
          >
            <a href="https://www.android-kiosk.com/remote-management/"
              >Remote Management</a
            >
          </li>
          <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1253"
          >
            <a href="#features">Features</a>
          </li>
          <li
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1150"
          >
            <a
              target="_blank"
              rel="noopener"
              href="https://kioskbrowser.crisp.help"
              >Help</a
            >
          </li>
          <li
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1263"
          >
            <a href="https://www.android-kiosk.com/contact-us/">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped></style>
