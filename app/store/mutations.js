const mutations = {
  nextActive: function(state) {
    if (state.active < state.rank.length - 1) {
      state.active++;
    } else {
      state.active = 0;
      state.stage++;
      Object.entries(state.grids).forEach(function([key, grid]) {
        if (grid.reminder !== 0) {grid.reminder = 0;}
        if (grid.helper !== null) {grid.helper = null;}
        if (grid.action !== null) {grid.action = null;}
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
    if (state.holder !== null) {state.holder = null;}
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
    } else if (data.from === null && state.attackFrom !== null && state.attackTo === null) {
      state.attackTo = data.to;
      state.grids[state.attackFrom].helper = 0;
      window.setTimeout(function() {
        state.grids[state.attackFrom].helper = null;
        state.grids[state.attackTo].helper = 1;
        window.setTimeout(function() {
          state.grids[state.attackTo].helper = null;
          if (state.grids[state.attackTo].state === 0) {
            state.holder = '没有敌军';
            window.setTimeout(function() {
              state.grids[state.attackFrom].action = 'attack';
              state.attackFrom = null;
              state.holder = null;
              state.attackTo = null;
            }.bind(state), 1500);
          }
        }.bind(state), 1000);
      }.bind(state), 500);
    }
  },
  cancelAttack: function(state) {
    if (state.attackFrom !== null && state.attackTo === null) {
      state.attackFrom = null;
    }
  },
  actionMarch: function(state, data) {
    if (data.step === 0) {
      state.holder = {
        'from': data.from
      }
    }
  }
}