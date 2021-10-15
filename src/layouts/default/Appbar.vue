<template>
  <v-app-bar app hide-on-scroll>
    <v-container>
      <v-row justify="space-between">
        <v-col>
          <v-row>
            <v-col>
              <h1 class="title">Uksss Devlog</h1>
            </v-col>
            <v-col cols="auto">
              <div class="ml-2">
                <span>Blog</span>
                <span>Note</span>
                <span>Github</span>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="auto">
          <v-btn>Github</v-btn>
          <v-btn>Search</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "DefaultAppbar",
};
</script>

<style scoped>
.title {
  display: inline;
}
</style>
