<template>
  <v-app-bar app hide-on-scroll color="transparent" flat>
    <v-dialog v-model="showDialog" width="500">
      <v-card>
        <v-card-title>💁🏻‍️포트폴리오 주소 복사가 완료되었습니다</v-card-title>
        <v-card-text
          >포트폴리오는 Notion Page에 준비해두었습니다 🤲 <br />
          주소창에서 복사된 URL을 붙여넣기 후 이동해 주시면 감사하겠습니다 😉
          <br />
          <br />
          🎯 바로가기는
          <a
            href="https://uksssss.notion.site/FE-daab5fb93a0e45da87e2536c4c095d42"
            >여기</a
          >를 클릭해 주세요(현재 탭 내에서 이동). ✈️
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-container>
      <v-row>
        <v-col cols="auto">
          <router-link to="/" class="text-decoration-none black--text">
            <h1 class="white--text">Uksss Devlog</h1>
          </router-link>
        </v-col>

        <v-spacer></v-spacer>

        <v-col class="d-flex justify-end align-center">
          <v-btn text class="white--text"> Blog </v-btn>
          <v-btn text class="white--text"> Note </v-btn>
          <v-btn text class="white--text"> Source </v-btn>
          <v-btn text class="white--text"> Contact </v-btn>
          <v-btn text @click="copyToClipboard" class="white--text">
            Portfolio
          </v-btn>

          <v-btn class="ml-3" icon color="blue lighten-2">
            <v-icon large>mdi-github</v-icon>
          </v-btn>

          <v-btn class="ml-1" icon color="blue lighten-2">
            <v-icon large>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "DefaultAppbar",

  data() {
    return {
      showDialog: false,
    };
  },

  methods: {
    copyToClipboard() {
      this.$copyText(
        "https://uksssss.notion.site/FE-daab5fb93a0e45da87e2536c4c095d42"
      );
      this.showDialog = true;
    },
  },
};
</script>

<style scoped></style>
