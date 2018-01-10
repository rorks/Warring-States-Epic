var app = new Vue({
  el: '#app',
  store: store,
  watch: {
    active: function() {
      if (this.rank[this.active] !== this.player) {
        this.$store.getters.activeCities.forEach(function(city) {
					if (this.stage === 0) {
						let decision = this.AIdomisticsDecision();
						switch(decision) {
							case 'build':
								this.$store.commit('actionBuild', {cost: this.getCityBuildCost(city[1]), code: city[0]});
								break;
							case 'enhance':
								this.$store.commit('actionBuild', {cost: this.getCityEnhanceCost(city[1]), code: city[0]});
								break;
						}
						this.$store.commit(
							'addHistory', 
							this.getStatesInfo()[city[1].state].name + '国在' + 
							this.getCitiesInfo()[city[0]].name + this.getActionName(decision)
						);
					}
					this.$store.commit('nextActive');
        }.bind(this));
      }
    }
  },
	created: function() {
		//console.log();
	},
  computed: {
    activeGrid: function() {
      return store.state.activeGrid;
    },
    stage: function() {
      return store.state.stage;
    },
    active: function() {
      return store.state.active;
    },
    rank: function() {
      return store.state.rank;
    },
    player: function() {
      return store.state.player;
    },
		attackFrom: function() {
      return store.state.attackFrom;
    },
    cities: function() {
			return store.state.cities;
		},
  }
});