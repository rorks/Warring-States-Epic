const mutations = {
  viewGrid: function(state, code) {
    state.viewGrid = code;
  },
  leaveGrid: function(state) {
    state.viewGrid = null;
  },
}