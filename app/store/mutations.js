const mutations = {
  enterGrid: function(state, code) {
    state.activeGrid = code;
    state.activeInfo = null;
  },
  leaveGrid: function(state) {
    state.activeGrid = null;
  },
  enterInfo: function(state, code) {
    if (state.activeInfo === code) {
      state.activeInfo = null;
    } else {
      state.activeInfo = code;
      state.activeGrid = null;
    }
  },
}