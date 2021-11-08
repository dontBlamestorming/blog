import marked from "marked";

export default {
  getPostList: (state) => {
    let result = [];

    if (state.current_category_id) {
      result = state.categorized_post_list[state.current_category_id - 1].posts;
    } else {
      state.categorized_post_list.forEach((category) => {
        category.posts.forEach((post) => {
          result.push(post);
        });
      });
    }

    return result;
  },

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
