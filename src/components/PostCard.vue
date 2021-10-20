<template>
  <v-card>
    <v-img :src="post.thumbnail_url"></v-img>
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>{{ post.sub_title }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      /*
        id: Int,
        title: String,
        sub_title: String,
        content: String - md,
        thumbnail_url: String - url,
        post_data: String - yyyy.mm.dd,
     */
      type: Object,
      default: () => ({}), // 만약 비동기 에러난다면 default에서 기본값 처리
    },
  },
};
</script>

<style scoped></style>
