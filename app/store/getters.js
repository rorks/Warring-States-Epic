const StateProto = function(code, rank) {
	this.code = code;
  this.cities = 0;
  this.army = 0;
  this.supply = 0;
  this.treasure = 0;
	this.rank = code === 0 ? 0 : rank.indexOf(code) + 1;
}

const getters = {
  states: function(state) {
		const states = [];
		for (let i = 0; i <= state.rank.length; i++) {
			states[i] = new StateProto(i, state.rank);
		}
    Object.entries(state.grids).forEach(function([key, grid]) {
			if (grid.type === 'city') {
				states[grid.state].cities++;
				states[grid.state].army += grid.army;
				states[grid.state].supply += grid.supply;
				states[grid.state].treasure += grid.treasure;
			}
    });
    return states;
  },
	activeCities: function(state) {
		return Object.entries(state.grids).filter(function([key, grid]) {
			return grid.state === state.rank[state.active];
    }.bind(state));
	}
}