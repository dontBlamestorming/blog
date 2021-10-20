<template>
  <v-row>
    <v-col
      v-for="(post, index) in postList"
      :key="index"
      cols="auto"
      sm="6"
      md="6"
      lg="4"
      xl="3"
    >
      <post-card :post="post"></post-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import PostCard from "../components/PostCard";

export default {
  name: "PostListView",
  components: {
    PostCard,
  },
  computed: {
    ...mapGetters({
      postList: "getPostList",
    }),
  },
  created() {
    this.$store.dispatch("fetchPostList");
  },
};
</script>

<style scoped></style>
