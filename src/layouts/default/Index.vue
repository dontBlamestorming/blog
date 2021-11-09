<template>
  <v-app class="app">
    <DefaultAppbar />

    <DefaultBanner />

    <DefaultView />

    <DefaultFooter />
  </v-app>
</template>

<script>
import DefaultAppbar from "./Appbar";
import DefaultBanner from "./Banner";
import DefaultFooter from "./Footer";
import DefaultView from "./View";

export default {
  name: "DefaultLayout",

  components: {
    DefaultAppbar,
    DefaultBanner,
    DefaultFooter,
    DefaultView,
  },
};
</script>

<style scoped>
.app {
  /*background-color: black !important;*/
}
</style>
