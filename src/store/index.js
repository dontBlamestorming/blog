import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categorized_post_list: [],
    current_category_id: 0,

    current_post: {
      id: null,
      post_date: "",
      content: "",
    },

    loading: false,
  },

  mutations,

  actions,

  getters,
});
