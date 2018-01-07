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
  actionBuild: function(state, cost) {
    state.cities[state.activeGrid].build += 1;
    state.cities[state.activeGrid].treasure -= cost;
    state.cities[state.activeGrid].action = 'build';
  }
}