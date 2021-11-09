import marked from "marked";

export default {
  SET_POST_LIST(state, data) {
    state.categorized_post_list = data;
  },

  SET_POST(state, { id, post_date, content }) {
    state.current_post = {
      id: id,
      post_date: post_date,
      content: marked(content),
    };
  },

  SET_CURRENT_CATEGORY_ID(state, id) {
    state.current_category_id = id;
  },
};
