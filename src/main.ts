import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCPl2Pd-Rymt-gEn2Pbwe_kSc5CXplIrDA",
  authDomain: "vueapp-ff4f4.firebaseapp.com",
  projectId: "vueapp-ff4f4",
  storageBucket: "vueapp-ff4f4.appspot.com",
  messagingSenderId: "152613518967",
  appId: "1:152613518967:web:6208d186f5099888b75072",
  measurementId: "G-SJSF8RHV5Q",
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
