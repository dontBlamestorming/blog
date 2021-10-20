import axios from "axios";

export default {
  fetchPostList({ commit }) {
    axios
      .get("api/test/posts")
      .then((response) => {
        commit("SET_POST_LIST", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
