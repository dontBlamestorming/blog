<template>
  <v-container tag="section" fluid class="banner full-width-image">
    <v-row
      class="d-flex align-center justify-center"
      :style="{ height: '100%' }"
    >
      <v-col cols="auto" class="text-center">
        <span class="banner_text"
          >프로그래머를 위한 <span>개발로그</span>
        </span>
        <br />
        <span class="banner_text"><span>공유하는</span> 학습블로그</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DefaultBanner",
};
</script>

<style scoped>
.full-width-image {
  width: 100%;
  height: 30rem;
  background-size: cover;
  background-position: center 70%;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(50, 50, 54, 0.6)),
    url(../../assets/banner.jpg);
}

.banner_text {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
}
</style>
