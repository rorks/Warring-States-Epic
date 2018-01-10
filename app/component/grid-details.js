Vue.component("grid-details", {
  template: `
		<transition
			name="custom-classes-transition"
			enter-active-class="animated slideInRight"
			leave-active-class="animated slideOutRight"
		>
			<section 
				style="
					position: fixed; right: 2pt; width: 320pt; top: 25%; height: 50%; z-index: 3;
					border: 1pt solid DarkGrey; box-shadow:2pt 2pt 5pt DarkSlateGrey; border-radius: 3pt; padding: 4pt 8pt;
					overflow-y: scroll; overflow-x: hidden; background-color: PapayaWhip
				"
			>
				<div 
					style="
						display: flex; align-items: center; flex-direction: row; border-bottom: 1pt solid DarkGrey; 
						padding-bottom: 4pt; justify-content: space-between
					"
				>
					<div style="display: flex; align-items: center; flex-direction: row">
						<template v-if="this.details.type === 'city'">
							<img style="width: 18pt; height: 18pt; margin-right: 4pt" v-bind:src="getIconSrc('city')" />
							<h3 style="margin-right: 8pt">{{getCitiesInfo()[code].name}}</h3>
						</template>
						<h4 
							v-if="details.state !== 0" 
							v-bind:style="{
								borderRadius: '50%', width: '15pt', height: '15pt', lineHeight: '15pt', textAlign: 'center', 
								verticalAlign: 'middle', color: 'white',
								backgroundColor: getStatesInfo()[details.state].color
							}"
						>
							{{getStatesInfo()[details.state].name}}
						</h4>
					</div>
					<img 
						style="width: 12pt; height: 12pt; cursor: pointer" 
						v-bind:src="getIconSrc('leave')" 
						v-on:click="leaveGrid" 
					/>
				</div>
				<div v-if="this.details.type === 'city'" style="display: flex; flex-direction: column">
					<div style="display: flex; flex-direction: row; justify-content: space-between">
						<div style="display: flex; flex-direction: column">
							<div style="display: flex; align-items: center; flex-direction: row; padding: 4pt 0">
								<h4 style="margin-right: 8pt">资源:</h4>
								<template v-for="food in getCitiesInfo()[code].food">
									<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('supply')" />
									<h5 style="margin-right: 8pt">粮食</h5>
								</template>
								<template v-for="tax in getCitiesInfo()[code].tax">
									<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('treasure')" />
									<h5 style="margin-right: 8pt">市场</h5>
								</template>
							</div>
							<div style="display: flex; align-items: center; flex-direction: row; padding: 4pt 0">
								<h4 style="margin-right: 8pt">仓库:</h4>
								<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('supply')" />
								<h5 style="margin-right: 8pt">粮仓 {{details.supply}}</h5>
								<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('treasure')" />
								<h5 style="margin-right: 8pt">金库 {{details.treasure}}</h5>
							</div>
							<div style="display: flex; align-items: center; flex-direction: row; padding: 4pt 0">
								<h4 style="margin-right: 8pt">设施:</h4>
								<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('wall')" />
								<h5 style="margin-right: 8pt">军事等级 {{details.build}}</h5>
								<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('farm')" />
								<h5 style="margin-right: 8pt">农商等级 {{details.enhance}}</h5>
							</div>
							<div style="display: flex; align-items: center; flex-direction: row; padding: 4pt 0">
								<h4 style="margin-right: 8pt">军团:</h4>
								<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('arrow')" />
								<h5 style="margin-right: 8pt">总数 {{details.army}}</h5>
								<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('morale')" />
								<h5 style="margin-right: 8pt">士气 {{details.morale}}</h5>
							</div>
						</div>
						<div v-if="details.hero !== null" 
							style="display: flex; flex-direction: column; justify-content: center; align-items: center"
						>
							<h4>郡守 {{getHerosInfo()[details.hero].name}}</h4>
							<div style="display: flex; flex-direction: row; margin: 2pt 0">
								<h5>统帅 {{getHerosInfo()[details.hero].battle}}</h5>
								<h5 style="margin: 0 8pt">斩杀 {{getHerosInfo()[details.hero].kill}}</h5>
								<h5>守护 {{getHerosInfo()[details.hero].safe}}</h5>
							</div>
							<div style="display: flex; flex-direction: row">
								<h5 
									v-if="getHerosInfo()[details.hero].enhance === 1"
									style="margin: 0 4pt; background-color: Teal; color: white; padding: 1pt 2pt; border-radius: 3pt"
								>
									民政
								</h5>
								<h5 
									v-if="getHerosInfo()[details.hero].build === 1"
									style="margin: 0 4pt; background-color: Teal; color: white; padding: 1pt 2pt; border-radius: 3pt"
								>
									军政
								</h5>
								<h5 
									v-if="getHerosInfo()[details.hero].tax === 1"
									style="margin: 0 4pt; background-color: Teal; color: white; padding: 1pt 2pt; border-radius: 3pt"
								>
									商业
								</h5>
								<h5 
									v-if="getHerosInfo()[details.hero].food === 1"
									style="margin: 0 4pt; background-color: Teal; color: white; padding: 1pt 2pt; border-radius: 3pt"
								>
									农业
								</h5>
								<h5 
									v-if="getHerosInfo()[details.hero].recruit === 1"
									style="margin: 0 4pt; background-color: Teal; color: white; padding: 1pt 2pt; border-radius: 3pt"
								>
									募兵
								</h5>
								<h5 style="margin: 0 4pt; background-color: Maroon; color: white; padding: 1pt 2pt; border-radius: 3pt">
									{{getArmysInfo()[getHerosInfo()[details.hero].army].name}}
								</h5>
							</div>
						</div>
					</div>
					<div 
						style="
							display: flex; justify-content: flex-start; flex-direction: column; padding: 4pt; margin: 4pt 0;
							background-color: DarkSlateGrey; color: white
						"
					>
						<div style="display: flex; flex-direction: row; justify-content: space-around">
							<h5>回合产粮: {{getCityFoodGain(details, getCitiesInfo()[code])}}</h5>
							<h5>回合税收: {{getCityTaxGain(details, getCitiesInfo()[code])}}</h5>
							<h5>回合粮耗: {{details.army}}</h5>
							<h5>回合兵源: {{getCityArmyResource(details)}}</h5>
						</div>
					</div>
					<div 
						v-if="details.state === player && rank[active] === player" 
						style="display: flex; flex-direction: row; flex-wrap: wrap"
					>
						<template v-if="details.action !== null">
							<h5 
								style="margin-right: 10pt" 
								v-if="
									details.action === 'build' || details.action === 'enhance' || details.action === 'attack'
								"
							>
								已{{getActionName(details.action)}}
							</h5>
							<h5 
								style="margin-right: 10pt" 
								v-else-if="details.action === 'recruit'"
							>
								已招募{{details.reminder}}个军团
							</h5>
							<h5 
								style="margin-right: 10pt" 
								v-else-if="details.action === 'nominate' && details.reminder === 2"
							>
								已{{getActionName(details.action)}}
							</h5>
						</template>
						<template v-if="stage === 0 && details.action === null">
							<div 
								style="
									display: flex; flex-direction: column; align-items: center; border: 2pt solid DarkRed;
									border-radius: 5pt; padding: 4pt; cursor: pointer; margin-right: 8pt
								"
								v-on:click="actionBuild"
								v-if="details.treasure >= getCityBuildCost(details)"
							>
								<img style="width: 18pt; height: 18pt; margin-bottom: 2pt" v-bind:src="getIconSrc('wall')" />
								<h5>{{this.getActionName('build')}}</h5>
								<h5>花费{{getCityBuildCost(details)}}金</h5>
							</div>
							<div 
								style="
									display: flex; flex-direction: column; align-items: center; border: 2pt solid DarkRed;
									border-radius: 5pt; padding: 4pt; cursor: pointer; margin-right: 8pt
								"
								v-on:click="actionEnhance"
								v-if="details.treasure >= getCityEnhanceCost(details)"
							>
								<img style="width: 18pt; height: 18pt; margin-bottom: 2pt" v-bind:src="getIconSrc('farm')" />
								<h5>{{this.getActionName('enhance')}}</h5>
								<h5>花费{{getCityEnhanceCost(details)}}金</h5>
							</div>
						</template>
						<template 
							v-if="
								stage === 0 && details.treasure > 0 && getCityArmyResource(details) > details.reminder
							"
						>
							<div 
								style="
									display: flex; flex-direction: column; align-items: center; border: 2pt solid DarkRed;
									border-radius: 5pt; padding: 4pt; cursor: pointer; margin-right: 8pt
								"
								v-on:click="actionRecruit('single')"
								v-if="details.action === null || details.action === 'recruit'"
							>
								<img style="width: 18pt; height: 18pt; margin-bottom: 2pt" v-bind:src="getIconSrc('arrow')" />
								<h5>{{this.getActionName('recruit')}}</h5>
								<h5>1金/军团</h5>
							</div>
							<div 
								style="
									display: flex; flex-direction: column; align-items: center; border: 2pt solid DarkRed;
									border-radius: 5pt; padding: 4pt; cursor: pointer; margin-right: 8pt
								"
								v-on:click="actionRecruit('max')"
								v-if="details.action === 'recruit'"
							>
								<img style="width: 18pt; height: 18pt; margin-bottom: 2pt" v-bind:src="getIconSrc('arrow')" />
								<h5>{{this.getActionName('recruit')}}</h5>
								<h5>招募全部</h5>
							</div>
						</template>
						<template v-if="stage === 0">
							<div 
								style="
									display: flex; flex-direction: column; align-items: center; border: 2pt solid DarkRed;
									border-radius: 5pt; padding: 4pt; cursor: pointer; margin-right: 8pt
								"
								v-on:click="actionNominating"
								v-if="details.action === null"
							>
								<img style="width: 18pt; height: 18pt; margin-bottom: 2pt" v-bind:src="getIconSrc('city')" />
								<h5>{{this.getActionName('nominate')}}</h5>
							</div>
							<div 
								v-if="details.action === 'nominate' && details.reminder === 1"
								v-for="option in getGridNominatesOptions(details.state, grids)"
								style="
									padding: 4pt; border: 2pt solid DarkRed; display: flex; flex-direction: column;
									border-radius: 5pt; cursor: pointer; margin: 2pt 4pt; align-items: center
								"
								v-on:click="actionNominated(option)"
							>
								<h5>{{option.code === null ? '不设' : '任命'}}</h5>
								<h5>{{option.code === null ? '郡守' : option.name}}</h5>
							</div>
						</template>
						<template v-if="stage === 1 && holder === null">
							<div 
								style="
									display: flex; flex-direction: column; align-items: center; border: 2pt solid DarkRed;
									border-radius: 5pt; padding: 4pt; cursor: pointer; margin-right: 8pt
								"
								v-if="details.action === null"
								v-on:click="actionAttacking"
							>
								<img style="width: 18pt; height: 18pt; margin-bottom: 2pt" v-bind:src="getIconSrc('arrow')" />
								<h5>{{this.getActionName('attack')}}</h5>
							</div>
							<div 
								style="
									display: flex; flex-direction: column; align-items: center; border: 2pt solid DarkRed;
									border-radius: 5pt; padding: 4pt; cursor: pointer; margin-right: 8pt
								"
								v-if="attackFrom !== code"
								v-on:click="actionMarching"
							>
								<img style="width: 18pt; height: 18pt; margin-bottom: 2pt" v-bind:src="getIconSrc('battle')" />
								<h5>{{this.getActionName('march')}}</h5>
							</div>
						</template>
						<template v-if="stage === 1 && holder !== null">
						</template>
					</div>
				</div>
			</section>
		</transition>
  `,
  computed: {
    code: function() {
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
		grids: function() {
			return store.state.grids;
		},
		holder: function() {
			return store.state.holder;
		},
		attackFrom: function() {
			return store.state.attackFrom;
		},
    details: function() {
			return store.state.grids[store.state.activeGrid];
    }
  },
  methods: {
    leaveGrid: function() {
      this.$store.commit('leaveGrid');
    },
		actionBuild: function() {
			this.$store.commit('actionBuild', {cost: this.getCityBuildCost(this.details), code: this.code});
			this.addHistory();
		},
		actionEnhance: function() {
			this.$store.commit('actionEnhance', {cost: this.getCityEnhanceCost(this.details), code: this.code});
			this.addHistory();
		},
		actionRecruit: function(type) {
			if (type === 'single') {
				this.$store.commit('actionRecruit', {number: 1, code: this.code});
				if (this.details.reminder === 1) {
					this.addHistory();
				}
			} else {
				let max = this.getCityArmyResource(this.details) - this.details.reminder;
				if (this.details.treasure < max) {
					max = this.details.treasure;
				}
				this.$store.commit('actionRecruit', {number: max, code: this.code});
			}
		},
		actionNominating: function() {
			this.$store.commit('actionNominate', {choice: null, code: this.code});
		},
		actionNominated: function(option) {
			this.$store.commit('actionNominate', {choice: option, code: this.code});
			this.addHistory();
		},
		actionAttacking: function() {
			this.$store.commit('actionAttack', {from: this.code, to: null});
		},
		actionMarching: function() {
			this.$store.commit('actionMarch', {from: this.code, step: 0});
		},
		addHistory: function(history) {
			this.$store.commit(
				'addHistory', 
				this.getStatesInfo()[this.details.state].name + '国在' + 
				this.getCitiesInfo()[this.code].name + this.getActionName(this.details.action)
			);
		}
  }
});