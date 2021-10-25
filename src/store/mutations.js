export default {
  SET_POST_LIST(state, data) {
    state.categorized_post_list = data;
  },

  SET_POST_ID(state, id) {
    state.selected_post_id = id;
  },
  SET_POST(state, post) {
    state.active_post = post;
  },
  SET_CATEGORY_ID(state, id) {
    state.current_category_id = id;
  },
};
