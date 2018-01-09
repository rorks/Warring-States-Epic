const mutations = {
  nextActive: function(state) {
    if (state.active < state.rank.length - 1) {
      state.active++;
    } else {
      state.active = 0;
      state.stage++;
    }
  },
  addHistory: function(state, info) {
    state.history.push(info);
    console.log(state.history);
  },
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
  actionBuild: function(state, data) {
    state.cities[data.code].build += 1;
    state.cities[data.code].treasure -= data.cost;
    state.cities[data.code].action = 'build';
  },
  actionEnhance: function(state, data) {
    state.cities[data.code].enhance += 1;
    state.cities[data.code].treasure -= data.cost;
    state.cities[data.code].action = 'enhance';
  },
  actionRecruit: function(state, data) {
    state.cities[data.code].army += data.number;
    state.cities[data.code].reminder += data.number;
    state.cities[data.code].treasure -= data.number;
    state.cities[data.code].action = 'recruit';
  },
  actionNominate: function(state, data) {
    if (state.cities[data.code].reminder === 1) {
      state.cities[data.code].hero = data.choice.code;
    }
    state.cities[data.code].reminder++;
    state.cities[data.code].action = 'nominate';
  }
}