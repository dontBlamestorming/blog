<template>
  <v-chip-group :value="currentCategoryId" active-class="primary--text">
    <v-chip
      v-for="(category, index) in categories"
      :key="category"
      :value="index"
      @click="onClickCategory(index)"
    >
      {{ category }}
    </v-chip>
  </v-chip-group>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Category",

  methods: {
    onClickCategory(id) {
      this.$store.dispatch("changeCurrentCategoryId", id);
    },
  },

  computed: {
    ...mapState(["category_list", "categorized_post_list"]),

    ...mapGetters({
      currentCategoryId: "getCurrentCategoryId",
    }),

    categories() {
      const result = ["all"];

      this.categorized_post_list.forEach((category) =>
        result.push(category.name)
      );

      return result;
    },
  },
};
</script>

<style scoped></style>
