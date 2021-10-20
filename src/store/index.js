import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    post: {},
    postList: [],
    /*
      id: Int,
      title: String,
      sub_title: String,
      content: String - md,
      thumbnail_url: String - url,
      post_data: String - yyyy.mm.dd,
    */
    loading: false,
  },
  mutations,
  actions,
  getters,
});
