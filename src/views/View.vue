<template>
  <div>
    <div>Index List</div>
    <template>
      <div v-html="test"></div>
      <!--      <v-row>-->
      <!--        <v-col-->
      <!--          v-for="(item, index) in items"-->
      <!--          :key="index"-->
      <!--          cols="auto"-->
      <!--          sm="6"-->
      <!--          md="6"-->
      <!--          lg="4"-->
      <!--          xl="3"-->
      <!--        >-->
      <!--          <v-card>-->
      <!--            <v-img-->
      <!--              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"-->
      <!--            ></v-img>-->
      <!--            <v-card-title>{{ item.title }}</v-card-title>-->
      <!--            <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>-->
      <!--          </v-card>-->
      <!--        </v-col>-->
      <!--      </v-row>-->
    </template>
  </div>
</template>

<script>
import axios from "axios";
import marked from "marked";

export default {
  name: "View",
  data() {
    return {
      items: [
        { title: "Card 1", subtitle: "subtitle 1" },
        { title: "Card 2", subtitle: "subtitle 2" },
        { title: "Card 3", subtitle: "subtitle 3" },
        { title: "Card 4", subtitle: "subtitle 4" },
        { title: "Card 5", subtitle: "subtitle 5" },
        { title: "Card 6", subtitle: "subtitle 6" },
        { title: "Card 7", subtitle: "subtitle 7" },
        { title: "Card 8", subtitle: "subtitle 8" },
        { title: "Card 9", subtitle: "subtitle 9" },
        { title: "Card 10", subtitle: "subtitle 10" },
      ],
      test: "",
    };
  },
  created() {
    axios
      .get("api/test/posts")
      .then((res) => {
        this.test = marked(res.data[0].content);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
