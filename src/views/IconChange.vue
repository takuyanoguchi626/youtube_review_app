<template>
  <div>
    <img :src="image" alt="" />
    <input type="file" ref="newImage" v-on:change="iconChange" />
    <button @click="iconChangeButton">変更</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "/img/",
    };
  },
  methods: {
    iconChange() {
      const image = this.$refs.newImage.files[0];
      this.image = URL.createObjectURL(image);
    },
    // iconChangeButton() {},
  },
  mounted() {
    const id = this.$route.params.id;
    console.log(id);
    const account = this.$store.getters.getAccountById(id);
    this.image += account.img;
  },
};
</script>

<style scoped></style>
