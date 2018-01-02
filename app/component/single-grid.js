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
    >
			<div v-if="typeof cities[code] !== 'undefined'" style="display: flex; flex-direction: column">
				<div style="display: flex; flex-direction: row; align-items: center">
					<h5>
						{{getCitiesInfo()[code].name}}
					</h5>
					<img v-for="food in getCitiesInfo()[code].food" style="width: 10pt; height: 10pt; margin-left: 2pt" v-bind:src="getIconSrc('supply')">
					<img v-for="tax in getCitiesInfo()[code].tax" style="width: 10pt; height: 10pt; margin-left: 2pt" v-bind:src="getIconSrc('treasure')">
				</div>
				<h5 v-if="cities[code].hero !== null" style="margin: 2pt 0">
					{{getHerosInfo()[cities[code].hero].name}}
				</h5>
				<div v-if="cities[code].state !== 0" style="display: flex; flex-direction: row; align-items: center">
					<img style="width: 10pt; height: 10pt; margin-right: 2pt" v-bind:src="getIconSrc('shield')">
					<h5 style="color: DarkSlateGrey">{{cities[code].army.reduce((a, b) => {return a + b;})}}</h5>
				</div>
				<img style="width: 8pt; height: 8pt; align-self: flex-end; cursor: pointer" v-bind:src="getIconSrc('enter')">
			</div>
    </div>
  `,
	computed: {
    cities () {
      return store.state.cities;
    }
  }
});