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
    active_post_id: null,
    active_post: null,
    loading: false,
  },
  mutations,
  actions,
  getters,
});
