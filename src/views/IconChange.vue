<template>
  <div>
    <img :src="image" alt="" />
    <input type="file" ref="newImage" v-on:change="iconChange" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "/img/pagu.jpg",
    };
  },
  methods: {
    iconChange() {
      const image = this.$refs.newImage.files[0];
      this.image = URL.createObjectURL(image);
    },
  },
};
</script>

<style scoped></style>
