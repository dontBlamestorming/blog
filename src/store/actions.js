import axios from "axios";

axios.defaults.baseURL = "/";

export default {
  fetchPostList({ commit }) {
    axios
      .get("api/category/")
      .then((response) => {
        commit("SET_POST_LIST", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  fetchPost({ commit }, postId) {
    axios
      .get(`api/posts/${parseInt(postId)}`)
      .then((response) => {
        commit("SET_POST", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  setPostId({ commit }, id) {
    commit("SET_POST_ID", id);
  },
  changeCurrentCategoryId({ commit }, id) {
    commit("SET_CATEGORY_ID", id);
  },
};
