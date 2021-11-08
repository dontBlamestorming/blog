import marked from "marked";

export default {
  getPost: (state) => {
    const post = {};

    if (state.active_post) {
      post.id = state.active_post.id;
      post.post_date = state.active_post.post_date;
      post.content = marked(state.active_post.content);
    }

    return post;
  },

  getCurrentCategoryId: (state) => {
    return state.current_category_id;
  },
};
