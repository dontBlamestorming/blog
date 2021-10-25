<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("fetchPostList");
  },
};
</script>

<!--<v-progress-circular-->
<!--  :size="50"-->
<!--  :width="7"-->
<!--  color="primary"-->
<!--  indeterminate-->
<!--&gt;</v-progress-circular>-->
