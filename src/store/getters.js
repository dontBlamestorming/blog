import marked from "marked";

export default {
  getCurrentPostList(state) {
    let currentPostList = [];
    let categorizedPostList = state.categorized_post_list;
    const currentCategoryId = state.current_category_id;

    categorizedPostList.map((category) => {
      if (!currentCategoryId) {
        category.posts.map((post) => {
          currentPostList.push(post);
        });
      } else {
        if (category.id === currentCategoryId) {
          category.posts.map((post) => {
            currentPostList.push(post);
          });
        }
      }
    });

    return currentPostList;
  },
  getCategoryList(state) {
    let categoryList = state.category_list;

    state.categorized_post_list.forEach((category) => {
      if (!categoryList.includes(category.name)) {
        categoryList.push(category.name);
      }
    });

    return categoryList;
  },
  getPost(state) {
    const post = {};

    if (state.active_post) {
      post.id = state.active_post.id;
      post.post_date = state.active_post.post_date;
      post.content = marked(state.active_post.content);
    }

    return post;
  },
  getCurrentCategoryId(state) {
    return state.current_category_id;
  },
};
