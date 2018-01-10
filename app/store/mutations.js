const mutations = {
  nextActive: function(state) {
    if (state.active < state.rank.length - 1) {
      state.active++;
    } else {
      state.active = 0;
      state.stage++;
      Object.entries(state.grids).forEach(function([key, city]) {
        if (city.reminder !== 0) {city.reminder = 0;}
        if (city.action !== null) {city.action = null;}
      });
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
    state.grids[data.code].build += 1;
    state.grids[data.code].treasure -= data.cost;
    state.grids[data.code].action = 'build';
  },
  actionEnhance: function(state, data) {
    state.grids[data.code].enhance += 1;
    state.grids[data.code].treasure -= data.cost;
    state.grids[data.code].action = 'enhance';
  },
  actionRecruit: function(state, data) {
    state.grids[data.code].army += data.number;
    state.grids[data.code].reminder += data.number;
    state.grids[data.code].treasure -= data.number;
    state.grids[data.code].action = 'recruit';
  },
  actionNominate: function(state, data) {
    if (state.grids[data.code].reminder === 1) {
      state.grids[data.code].hero = data.choice.code;
    }
    state.grids[data.code].reminder++;
    state.grids[data.code].action = 'nominate';
  },
  actionAttack: function(state, data) {
    if (data.to === null) {
      state.attackFrom = data.from;
      state.activeGrid = null;
    } else if (data.from === null) {
      state.grids[state.attackFrom].helper = 0;
      window.setTimeout(function() {
        state.grids[state.attackFrom].helper = null;
        state.grids[data.to].helper = 1;
      }.bind(state), 500);
    }
  }
}