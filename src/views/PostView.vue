<template>
  <v-row class="d-flex justify-center">
    <v-sheet width="670" v-html="content"></v-sheet>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PostView",

  created() {
    this.$store.dispatch("fetchPost", this.$route.params.post_id);
  },

  computed: {
    ...mapState({
      content: (state) => state.current_post.content,
    }),
  },
};
</script>

<style scoped></style>
