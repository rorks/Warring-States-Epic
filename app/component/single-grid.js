Vue.component("single-grid", {
  props: ['code'],
  template: `
    <div
      v-bind:style="{
				display: 'inline-block', verticalAlign: 'top', width: '40pt', height: '40pt', padding: '1pt', color: 'white',
        border: grids[code].type !== null ? '1pt solid lightgrey' : '1pt solid transparent',
        backgroundColor: this.gridBackgroundColor,
				opacity: grids[code].type === 'city' && grids[code].state !== 0 ? 1 : 0.9,
				cursor: attackFrom !== null && checkAttackableArea(attackFrom, grids).indexOf(code) !== -1 ? 
					'crosshair' : 'default'
      }"
			v-on:click="selectGrid"
    >
			<div 
				v-if="grids[code].type === 'city'" 
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
				<h5 v-if="grids[code].hero !== null" style="margin: 1pt 0">
					{{getHerosInfo()[grids[code].hero].name}}
				</h5>
				<div 
					v-if="grids[code].state !== 0"
					style="display: flex; flex-direction: row; align-items: center"
				>
					<img style="width: 8pt; height: 8pt; margin-right: 2pt" v-bind:src="getIconSrc('arrow')" />
					<h5 style="color: DarkSlateGrey">{{grids[code].army}}</h5>
				</div>
			</div>
			<transition
				name="custom-classes-transition"
				enter-active-class="animated zoomIn"
				leave-active-class="animated tada"
			>
				<img 
					v-if="stage === 1 && grids[code].helper === 0" 
					style="position: relative; top: -40pt; width: 40pt; height: 40pt; margin: 2pt" v-bind:src="getIconSrc('arrow')" 
				/>
			</transition>
			<transition
				name="custom-classes-transition"
				enter-active-class="animated bounceInDown"
			>
				<img 
					v-if="stage === 1 && grids[code].helper === 1" 
					style="position: relative; top: -40pt; width: 40pt; height: 40pt; margin: 2pt" v-bind:src="getIconSrc('arrow')" 
				/>
			</transition>
    </div>
  `,
	computed: {
		stage: function() {
      return store.state.stage;
    },
    grids: function() {
      return store.state.grids;
    },
		attackFrom: function() {
      return store.state.attackFrom;
    },
		gridBackgroundColor: function() {
			if (this.attackFrom === null) {
				return this.grids[this.code].type === 'city' ? 
					this.getStatesInfo()[this.grids[this.code].state].color : 'transparent';
			}
			if (this.code === this.attackFrom) {
				return this.getStatesInfo()[this.grids[this.code].state].color;
			}
			return this.checkAttackableArea(this.attackFrom, this.grids).indexOf(this.code) === -1 ?
				'DarkGrey' : 'LightCoral';
		}
  },
	methods: {
		selectGrid: function() {
			if (
				this.attackFrom !== null && 
				this.checkAttackableArea(this.attackFrom, this.grids).indexOf(this.code) !== -1
			) {
				this.$store.commit('actionAttack', {from: null, to: this.code});
			} else if (this.grids[this.code].type === 'city') {
				this.$store.commit('enterGrid', this.code);
			}
		}
	}
});