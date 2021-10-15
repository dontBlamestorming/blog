<template>
  <v-container fluid class="banner-background">
    <!--    <v-parallax src="../../assets/banner.jpg"></v-parallax>-->
  </v-container>
</template>

<script>
export default {
  name: "DefaultBanner",
};
</script>

<style scoped>
.banner-background {
  background: no-repeat center/100% url(../../assets/banner.jpg);
  height: 600px;
}
</style>
