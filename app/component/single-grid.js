Vue.component("single-grid", {
  props: ['code'],
  template: `
    <div
      v-bind:style="{
				display: 'inline-block', verticalAlign: 'top', width: '40pt', height: '39pt', padding: '1pt', color: 'white',
        border: checkGridActive(code) ? '1pt solid lightgrey' : '1pt solid transparent',
        backgroundColor: typeof cities[code] !== 'undefined' ? getStatesInfo()[cities[code].state].color : 'transparent',
				opacity: typeof cities[code] !== 'undefined' && cities[code].state !== 0 ? 1 : 0.9
      }"
    >
			<div 
				v-if="typeof cities[code] !== 'undefined'" 
				v-on:click="enterGrid"
				style="display: flex; flex-direction: column; cursor: pointer" 
			>
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
		enterGrid: function() {
			this.$store.commit('enterGrid', this.code);
		}
	}
});