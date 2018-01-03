Vue.component("single-grid", {
  props: ['code'],
  template: `
    <div 
      class="single-location"
      v-bind:style="{
        borderColor: checkGridActive(code) ? 'lightgrey' : 'transparent',
        backgroundColor: typeof cities[code] !== 'undefined' ? getStatesInfo()[cities[code].state].color : 'transparent',
				opacity: typeof cities[code] !== 'undefined' && cities[code].state !== 0 ? 1 : 0.9
      }"
			v-on:click="viewGrid"
    >
			<div v-if="typeof cities[code] !== 'undefined'" style="display: flex; flex-direction: column">
				<div style="display: flex; flex-direction: row; align-items: center">
					<h5>
						{{getCitiesInfo()[code].name}}
					</h5>
					<img 
						v-for="food in getCitiesInfo()[code].food" 
						style="width: 8pt; height: 8pt; margin-left: 2pt" 
						v-bind:src="getIconSrc('supply')"
					/>
					<img 
						v-for="tax in getCitiesInfo()[code].tax" 
						style="width: 8pt; height: 8pt; margin-left: 2pt" 
						v-bind:src="getIconSrc('treasure')"
					/>
				</div>
				<h5 v-if="cities[code].hero !== null" style="margin: 1pt 0">
					{{getHerosInfo()[cities[code].hero].name}}
				</h5>
				<div v-if="cities[code].state !== 0" style="display: flex; flex-direction: row; align-items: center">
					<img style="width: 8pt; height: 8pt; margin-right: 2pt" v-bind:src="getIconSrc('arrow')" />
					<h5 style="color: DarkSlateGrey">{{cities[code].army}}</h5>
				</div>
			</div>
    </div>
  `,
	computed: {
    cities: function() {
      return store.state.cities;
    }
  },
	methods: {
		viewGrid: function() {
			this.$store.commit('viewGrid', this.code);
		}
	}
});