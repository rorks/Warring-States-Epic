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
  },
  actionEnhance: function(state, cost) {
    state.cities[state.activeGrid].enhance += 1;
    state.cities[state.activeGrid].treasure -= cost;
    state.cities[state.activeGrid].action = 'enhance';
  },
  actionRecruit: function(state, number) {
    state.cities[state.activeGrid].army += number;
    state.cities[state.activeGrid].reminder += number;
    state.cities[state.activeGrid].treasure -= number;
    state.cities[state.activeGrid].action = 'recruit';
  },
  actionNominate: function(state, choice) {
    if (state.cities[state.activeGrid].reminder === 1) {
      state.cities[state.activeGrid].hero = choice.code;
    }
    state.cities[state.activeGrid].reminder++;
    state.cities[state.activeGrid].action = 'nominate';
  }
}