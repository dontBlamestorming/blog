export default {
  SET_LOADING(state, payload) {
    console.log(state, payload);
  },
  SET_POST_LIST(state, payload) {
    state.postList = payload
  },
};
