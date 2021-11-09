<template>
  <v-chip-group :value="currentCategoryId" active-class="primary--text">
    <v-chip
      v-for="(category, index) in categories"
      :key="category"
      :value="index"
      @click="changeCategoryId(index)"
    >
      {{ category }}
    </v-chip>
  </v-chip-group>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Category",

  methods: {
    changeCategoryId(id) {
      this.$store.dispatch("changeCategoryId", id);
    },
  },

  computed: {
    ...mapState({
      categorizedPostList: "categorized_post_list",
      currentCategoryId: "current_category_id",
    }),

    categories() {
      const result = ["all"];

      this.categorizedPostList.forEach((category) =>
        result.push(category.name)
      );

      return result;
    },
  },
};
</script>

<style scoped></style>
