<template>
  <v-container tag="section" fluid class="banner full-width-image">
    <v-row class="d-flex align-center justify-center test">
      <v-col cols="auto" class="white--text">
        “완벽함이란 더 이상 보탤 것이 남아 있지 않을 때가 아니라 더 이상 뺄 것이
        없을 때 완성된다.” - 생텍쥐페리
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
.test {
  height: 600px;
}

.banner-background {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    no-repeat center/100% url(../../assets/banner.jpg);
}

.full-width-image {
  /*position: relative;*/
  width: 100%;
  height: 30rem;
  background-size: cover;
  background-position: center 70%;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(../../assets/banner.jpg);
}
</style>
