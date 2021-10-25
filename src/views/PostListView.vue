<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-chip-group :value="currentCategoryId" active-class="primary--text">
          <v-chip
            v-for="(category, index) in categoryList"
            :key="category"
            :value="index"
            @click="onClickCategory(index)"
          >
            {{ category }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
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
        <div @click="onClickPostCard(post.id, post.category)">
          <post-card :post="post"></post-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostCard from "../components/PostCard";

export default {
  name: "PostListView",
  components: {
    PostCard,
  },
  methods: {
    onClickCategory(id) {
      this.$store.dispatch("changeCurrentCategoryId", id);
    },
    onClickPostCard(id, category) {
      this.$store.dispatch("setPostId", id);
      this.$router.push({
        path: `${category}/post/${id}`,
        params: { post_id: id, category: category },
      });
    },
  },
  computed: {
    ...mapGetters({
      postList: "getCurrentPostList",
      /*
        id: Int,
        title: String,
        sub_title: String,
        category: String,
        thumbnail_url: String - url,
      */
      categoryList: "getCategoryList",
      /*
        category_list: Array
      */
      currentCategoryId: "getCurrentCategoryId",
    }),
  },
};
</script>

<style scoped></style>
