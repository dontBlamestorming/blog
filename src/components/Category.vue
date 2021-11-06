<template>
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
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Category",

  methods: {
    onClickCategory(id) {
      this.$store.dispatch("changeCurrentCategoryId", id);
    },
  },

  computed: {
    ...mapGetters({
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
