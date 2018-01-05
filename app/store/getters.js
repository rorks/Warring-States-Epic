const StateProto = function(code, rank) {
	this.code = code;
  this.cities = 0;
  this.army = 0;
  this.supply = 0;
  this.treasure = 0;
	this.rank = code === 0 ? 0 : rank.indexOf(code) + 1;
}

const getters = {
  activeGridDetails: function(state) {
    if (typeof state.cities[state.activeGrid] === 'undefined') {
      return {}
    } else {
      return {
        type: 'city',
        data: state.cities[state.activeGrid]
      }
    }
  },
  states: function(state) {
		const states = [];
		for (let i = 0; i <= state.rank.length; i++) {
			states[i] = new StateProto(i, state.rank);
		}
    Object.entries(state.cities).forEach(function([key, city]) {
			states[city.state].cities++;
			states[city.state].army += city.army;
			states[city.state].supply += city.supply;
			states[city.state].treasure += city.treasure;
    });
    return states;
  }
}