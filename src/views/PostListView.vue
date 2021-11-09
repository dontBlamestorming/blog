<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-center">
        <category></category>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(post, index) in posts"
        :key="index"
        cols="auto"
        sm="6"
        md="6"
        lg="4"
        xl="3"
      >
        <div @click="onClickPostCard(post.id, post.category)">
          <post-card :post="post"></post-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

import PostCard from "../components/PostCard";
import Category from "../components/Category";

export default {
  name: "PostListView",

  components: {
    Category,
    PostCard,
  },

  methods: {
    onClickPostCard(id, category) {
      this.$router.push({
        path: `${category}/post/${id}`,
        params: { post_id: id, category: category },
      });
    },
  },

  computed: {
    ...mapState(["current_category_id", "categorized_post_list"]),

    posts() {
      let result = [];

      if (this.current_category_id)
        return this.categorized_post_list[this.current_category_id - 1].posts;

      this.categorized_post_list.forEach((category) => {
        category.posts.forEach((post) => {
          result.push(post);
        });
      });

      return result;
    },
  },
};
</script>

<style scoped></style>
