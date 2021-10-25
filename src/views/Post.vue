<template>
  <v-row class="d-flex justify-center">
    <v-sheet width="670" v-html="post.content"></v-sheet>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Post",
  data() {
    return {
      content: "",
    };
  },
  created() {
    this.$store.dispatch("fetchPost", this.$route.params.post_id);
  },
  computed: {
    ...mapGetters({
      post: "getPost",
      /*
        id: Int,
        post_date: String,
        content: marked(String),
      */
    }),
  },
};
</script>

<style scoped></style>
