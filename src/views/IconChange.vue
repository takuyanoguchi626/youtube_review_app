<template>
  <div>
    <img :src="image" alt="" />
    <input type="file" ref="newImage" v-on:change="iconChange" />
    <button @click="iconChangeButton()">変更</button>
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
    this.image = account.img;
  },
};
</script>

<style scoped></style>
