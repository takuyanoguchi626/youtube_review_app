<template>
  <div class="iconChange">
    <h4>プロフィール画像の編集</h4>
    <label for="iconChange">
      <img :src="image" alt="" class="circle responsive-img image" />
    </label>
    <input
      id="iconChangeBtn"
      type="file"
      ref="newImage"
      v-on:change="iconChange"
    />
    <button class="btn" @click="iconChangeButton()">変更</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "",
    };
  },
  methods: {
    iconChange() {
      const image = this.$refs.newImage.files[0];
      this.image = URL.createObjectURL(image);
    },
    iconChangeButton() {
      const id = Number(this.$route.params.id);
      this.$store.commit("changeAccountIcon", {
        id: id,
        img: this.image,
      });
      this.$router.push(`/myProfile/${id}`);
    },
  },
  mounted() {
    const id = Number(this.$route.params.id);
    const account = this.$store.getters.getAccountById(id);
    const currentUser = this.$store.getters.getCurrentUser;
    if (account === undefined || account.id !== currentUser.id) {
      this.$router.push("/404");
    }
    this.image = account.img;
  },
};
</script>

<style scoped>
.iconChange {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image {
  width: 300px;
  height: 300px;
}
.image:hover {
  opacity: 0.6;
  cursor: crosshair;
}
.btn {
  margin-top: 20px;
}
#iconChangeBtn {
  padding-top: 10px;
}
</style>
