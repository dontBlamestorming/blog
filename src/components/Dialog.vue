<template>
  <v-dialog
    v-model="showDialog"
    width="500"
    v-click-outside="onClickOutSide"
  ></v-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dialog",
  methods: {
    onClickOutSide() {
      this.$store.commit("SET_DIALOG");
    },
  },
  computed: {
    ...mapGetters({
      showDialog: "getShowDialog",
    }),
  },
};
</script>

<style scoped></style>
