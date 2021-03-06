Vue.component("info-board", {
  template: `
    <div 
      style="
        position: fixed; z-index: 2; left: 0; top: 0; width: 250pt; padding: 6pt 4pt; flex-direction: column;
        background-color: black; color: white; border-radius: 3pt; display: flex; 
      "
     >
      <div style="display: flex; flex-direction: row; justify-content: space-around; margin-bottom: 6pt">
        <h5>第{{round + 1}}回合</h5>
        <h5>{{getStageName(stage)}}阶段</h5>
				<div style="display: flex; flex-direction: row">
					<h5 
						v-for="(state, index) in rank"
						v-bind:style="{
							borderRadius: '50%', width: '15pt', height: '15pt', lineHeight: '15pt', textAlign: 'center', 
							verticalAlign: 'middle', color: 'white', marginRight: '4pt',
							backgroundColor: active === index ? getStatesInfo()[state].color : 'DarkSlateGrey'
						}"
					>
						{{getStatesInfo()[state].name}}
					</h5>
				</div>
      </div>
			<div style="display: flex; flex-direction: row; margin-bottom: 6pt; padding-left: 8pt">
				<h5 v-if="rank[active] !== player">{{getHerosInfo()[getStatesInfo()[rank[active]].owner].name}}行动中</h5>
      	<div v-else-if="stage === 0" style="display: flex; flex-direction: row; align-items: center">
					<h5 style="margin-right: 4pt">请进入本国城池处理{{getStageName(stage)}}</h5>
					<h5
						v-on:click="nextActive"
						style="background-color: Gainsboro; color: black; padding: 2pt 4pt; border-radius: 3pt; cursor: pointer"
					>
						完成
					</h5>
				</div>
				<div v-else-if="stage === 1 && attackFrom !== null" style="display: flex; flex-direction: row; align-items: center">
					<h5 style="margin-right: 4pt">请从地图选择进攻目标地区</h5>
					<h5
						v-on:click="cancelAttack"
						style="background-color: Gainsboro; color: black; padding: 2pt 4pt; border-radius: 3pt; cursor: pointer"
					>
						取消
					</h5>
				</div>
			</div>
      <div style="display: flex; flex-direction: row; border-top: 1pt solid darkgrey; padding-top: 6pt">
        <h5 
          v-on:click="enterInfo('cities')" 
          style="
						background-color: Gainsboro; color: black; padding: 1pt 2pt; border-radius: 3pt; cursor: pointer;
						margin-left: 8pt
					"
        >
          全城市
        </h5>
        <h5 
          v-on:click="enterInfo('states')" 
          style="
						background-color: Gainsboro; color: black; padding: 1pt 2pt; border-radius: 3pt; cursor: pointer;
						margin-left: 8pt
					"
        >
          全势力
        </h5>
        <h5 
          v-on:click="enterInfo('heros')" 
          style="
						background-color: Gainsboro; color: black; padding: 1pt 2pt; border-radius: 3pt; cursor: pointer;
						margin-left: 8pt
					"
        >
          全武将
        </h5>
				<h5 
          v-on:click="enterInfo('history')" 
          style="
						background-color: Gainsboro; color: black; padding: 1pt 2pt; border-radius: 3pt; cursor: pointer;
						margin-left: 8pt
					"
        >
          战国志
        </h5>
      </div>
      <div v-show="activeInfo !== null" style="display: block; margin-top: 5pt; height: 120pt; overflow-y: scroll">
        <div 
          v-show="activeInfo === 'cities'"
          v-for="(city, index) in getCitiesInfo()" 
          v-bind:style="{
            display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '4pt 2pt', margin: '1pt 0',
            backgroundColor: grids[index].state !== 0 ? getStatesInfo()[grids[index].state].color : 'DarkSlateGrey'
          }"
        >
          <h5 style="margin-right: 6pt">{{city.name}}</h5>
          <img style="width: 12pt; height: 12pt; margin-right: 2pt" v-bind:src="getIconSrc('supply')" />
          <h5 style="margin-right: 6pt">{{grids[index].supply}}</h5>
          <img style="width: 12pt; height: 12pt; margin-right: 2pt" v-bind:src="getIconSrc('treasure')" />
          <h5 style="margin-right: 6pt">{{grids[index].treasure}}</h5>
          <img style="width: 12pt; height: 12pt; margin-right: 2pt" v-bind:src="getIconSrc('wall')" />
          <h5 style="margin-right: 6pt">{{grids[index].build}}</h5>
          <img style="width: 12pt; height: 12pt; margin-right: 2pt" v-bind:src="getIconSrc('farm')" />
          <h5 style="margin-right: 6pt">{{grids[index].enhance}}</h5>
          <img style="width: 12pt; height: 12pt; margin-right: 2pt" v-bind:src="getIconSrc('arrow')" />
          <h5 style="margin-right: 6pt">{{grids[index].army}}</h5>
          <img style="width: 12pt; height: 12pt; margin-right: 2pt" v-bind:src="getIconSrc('morale')" />
          <h5>{{grids[index].morale}}</h5>
        </div>
        <div 
          v-show="activeInfo === 'states'"
          v-for="(state, index) in states"
					v-if="index !== 0"
          style="
            display: flex; flex-direction: row; align-items: center; padding: 4pt 2pt; margin: 1pt 0;
            background-color: DarkSlateGrey
          "
        >
					<h5
						v-bind:style="{
              marginRight: '6pt', borderBottom: '1pt solid',
              borderColor: getStatesInfo()[state.code].color
            }"
					>
						{{getStatesInfo()[state.code].name}}
					</h5>
					<img style="width: 12pt; height: 12pt; margin-right: 2pt" v-bind:src="getIconSrc('city')" />
          <h5 style="margin-right: 6pt">{{state.cities}}</h5>
					<img style="width: 12pt; height: 12pt; margin-right: 2pt" v-bind:src="getIconSrc('arrow')" />
          <h5 style="margin-right: 6pt">{{state.army}}</h5>
					<img style="width: 12pt; height: 12pt; margin-right: 2pt" v-bind:src="getIconSrc('supply')" />
          <h5 style="margin-right: 6pt">{{state.supply}}</h5>
          <img style="width: 12pt; height: 12pt; margin-right: 2pt" v-bind:src="getIconSrc('treasure')" />
          <h5>{{state.treasure}}</h5>
        </div>
				<div 
          v-show="activeInfo === 'heros'"
          v-for="hero in getHerosInfo()" 
          v-bind:style="{
            display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '4pt 2pt', margin: '1pt 0',
            backgroundColor: getStatesInfo()[hero.state].color
          }"
        >
					<h5 style="margin-right: 6pt">{{hero.name}}</h5>
					<h5 style="margin-right: 4pt">统帅 {{hero.battle}}</h5>
					<h5 style="margin-right: 4pt">斩杀 {{hero.kill}}</h5>
					<h5 style="margin-right: 4pt">守护 {{hero.safe}}</h5>
					<h5 
						v-if="hero.enhance === 1"
						style="margin-right: 4pt; background-color: Teal; padding: 1pt 2pt; border-radius: 3pt"
					>
						民政
					</h5>
					<h5 
						v-if="hero.build === 1"
						style="margin-right: 4pt; background-color: Teal; padding: 1pt 2pt; border-radius: 3pt"
					>
						军政
					</h5>
					<h5 
						v-if="hero.tax === 1"
						style="margin-right: 4pt; background-color: Teal; padding: 1pt 2pt; border-radius: 3pt"
					>
						商业
					</h5>
					<h5 
						v-if="hero.food === 1"
						style="margin-right: 4pt; background-color: Teal; padding: 1pt 2pt; border-radius: 3pt"
					>
						农业
					</h5>
					<h5 
						v-if="hero.recruit === 1"
						style="margin-right: 4pt; background-color: Teal; padding: 1pt 2pt; border-radius: 3pt"
					>
						募兵
					</h5>
					<h5 style="background-color: Maroon; color: white; padding: 1pt 2pt; border-radius: 3pt">
						{{getArmysInfo()[hero.army].name}}
					</h5>
				</div>
				<div 
          v-show="activeInfo === 'history'"
          v-for="info in history"
          style="
            display: flex; flex-direction: row; align-items: center; padding: 4pt 2pt; margin: 1pt 0;
            background-color: DarkSlateGrey
          "
        >
					<h5>{{info}}</h5>
				</div>
      </div>
    </div>
  `,
  computed: {
    round: function() {
      return store.state.round;
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
    activeInfo: function() {
      return store.state.activeInfo;
    },
    grids: function() {
      return store.state.grids;
    },
		history: function() {
			return store.state.history;
		},
		attackFrom: function() {
			return store.state.attackFrom;
		},
    states: function() {
      return this.$store.getters.states;
    },
  },
  methods: {
    enterInfo: function(code) {
      this.$store.commit('enterInfo', code);
    },
		nextActive: function() {
			this.$store.commit('nextActive');
		},
		cancelAttack: function() {
			this.$store.commit('cancelAttack');
		}
  }
});