<template>
  <v-app>
    <DefaultAppbar></DefaultAppbar>

    <DefaultBanner></DefaultBanner>

    <v-main>
      <v-container>
        <DefaultView></DefaultView>
      </v-container>
    </v-main>

    <DefaultFooter></DefaultFooter>
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

<style scoped></style>
