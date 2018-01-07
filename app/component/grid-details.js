Vue.component("grid-details", {
  template: `
    <section 
      style="
        position: fixed; left: 25%; width: 50%; top: 25%; height: 50%; z-index: 3; background-color: PapayaWhip;
        border: 1pt solid DarkGrey; box-shadow:2pt 2pt 5pt DarkSlateGrey; border-radius: 3pt; padding: 4pt 8pt;
        overflow-y: scroll; overflow-x: hidden
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
            v-if="details.data.state !== 0" 
            v-bind:style="{
              borderRadius: '50%', width: '15pt', height: '15pt', lineHeight: '15pt', textAlign: 'center', 
              verticalAlign: 'middle', color: 'white',
              backgroundColor: getStatesInfo()[details.data.state].color
            }"
          >
            {{getStatesInfo()[details.data.state].name}}
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
							<h5 style="margin-right: 8pt">粮仓 {{details.data.supply}}</h5>
							<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('treasure')" />
							<h5 style="margin-right: 8pt">金库 {{details.data.treasure}}</h5>
						</div>
						<div style="display: flex; align-items: center; flex-direction: row; padding: 4pt 0">
							<h4 style="margin-right: 8pt">设施:</h4>
							<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('wall')" />
							<h5 style="margin-right: 8pt">军事等级 {{details.data.build}}</h5>
							<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('farm')" />
							<h5 style="margin-right: 8pt">农商等级 {{details.data.enhance}}</h5>
						</div>
						<div style="display: flex; align-items: center; flex-direction: row; padding: 4pt 0">
							<h4 style="margin-right: 8pt">军团:</h4>
							<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('arrow')" />
							<h5 style="margin-right: 8pt">总数 {{details.data.army}}</h5>
							<img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('morale')" />
							<h5 style="margin-right: 8pt">士气 {{details.data.morale}}</h5>
						</div>
					</div>
					<div v-if="details.data.hero !== null" 
						style="display: flex; flex-direction: column; justify-content: center; align-items: center"
					>
						<h4>郡守 {{getHerosInfo()[details.data.hero].name}}</h4>
						<div style="display: flex; flex-direction: row; margin: 2pt 0">
							<h5>统帅 {{getHerosInfo()[details.data.hero].battle}}</h5>
							<h5 style="margin: 0 8pt">斩杀 {{getHerosInfo()[details.data.hero].kill}}</h5>
							<h5>守护 {{getHerosInfo()[details.data.hero].safe}}</h5>
						</div>
						<div style="display: flex; flex-direction: row">
							<h5 
								v-if="getHerosInfo()[details.data.hero].enhance === 1"
								style="margin: 0 4pt; background-color: Teal; color: white; padding: 1pt 2pt; border-radius: 3pt"
							>
								民政
							</h5>
							<h5 
								v-if="getHerosInfo()[details.data.hero].build === 1"
								style="margin: 0 4pt; background-color: Teal; color: white; padding: 1pt 2pt; border-radius: 3pt"
							>
								军政
							</h5>
							<h5 
								v-if="getHerosInfo()[details.data.hero].tax === 1"
								style="margin: 0 4pt; background-color: Teal; color: white; padding: 1pt 2pt; border-radius: 3pt"
							>
								商业
							</h5>
							<h5 
								v-if="getHerosInfo()[details.data.hero].food === 1"
								style="margin: 0 4pt; background-color: Teal; color: white; padding: 1pt 2pt; border-radius: 3pt"
							>
								农业
							</h5>
							<h5 
								v-if="getHerosInfo()[details.data.hero].recruit === 1"
								style="margin: 0 4pt; background-color: Teal; color: white; padding: 1pt 2pt; border-radius: 3pt"
							>
								募兵
							</h5>
							<h5 style="margin: 0 4pt; background-color: Maroon; color: white; padding: 1pt 2pt; border-radius: 3pt">
								{{getArmysInfo()[getHerosInfo()[details.data.hero].army].name}}
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
            <h5>回合产粮: {{getCityFoodGain(details.data, getCitiesInfo()[code])}}</h5>
            <h5>回合税收: {{getCityTaxGain(details.data, getCitiesInfo()[code])}}</h5>
            <h5>回合粮耗: {{details.data.army}}</h5>
            <h5>回合兵源: {{getCityArmyResource(details.data)}}</h5>
          </div>
        </div>
				<div 
					v-if="details.data.state === player && rank[active] === player" 
					style="display: flex; flex-direction: column"
				>
          <template v-if="details.data.action === null && stage === 0">
            <div style="display: flex; flex-direction: row">
              <div 
                style="
                  display: flex; flex-direction: column; align-items: center; border: 2pt solid DarkRed;
                  border-radius: 5pt; padding: 4pt; cursor: pointer; margin-right: 8pt
                "
								v-on:click="actionBuild"
								v-if="details.data.treasure >= getCityBuildCost(details.data)"
              >
                <img style="width: 18pt; height: 18pt; margin-bottom: 2pt" v-bind:src="getIconSrc('wall')" />
                <h5>军事升级</h5>
								<h5>花费{{getCityBuildCost(details.data)}}金</h5>
              </div>
              <div 
                style="
                  display: flex; flex-direction: column; align-items: center; border: 2pt solid DarkRed;
                  border-radius: 5pt; padding: 4pt; cursor: pointer; margin-right: 8pt
                "
								v-if="details.data.treasure >= getCityEnhanceCost(details.data)"
              >
                <img style="width: 18pt; height: 18pt; margin-bottom: 2pt" v-bind:src="getIconSrc('farm')" />
                <h5>农商升级</h5>
								<h5>花费{{getCityEnhanceCost(details.data)}}金</h5>
              </div>
              <div 
                style="
                  display: flex; flex-direction: column; align-items: center; border: 2pt solid DarkRed;
                  border-radius: 5pt; padding: 4pt; cursor: pointer; margin-right: 8pt
                "
								v-if="details.data.treasure > 0 && getCityArmyResource(details.data) > 0"
              >
                <img style="width: 18pt; height: 18pt; margin-bottom: 2pt" v-bind:src="getIconSrc('arrow')" />
                <h5>招募乡勇</h5>
								<h5>1金/军团</h5>
              </div>
							<div 
                style="
                  display: flex; flex-direction: column; align-items: center; border: 2pt solid DarkRed;
                  border-radius: 5pt; padding: 4pt; cursor: pointer; margin-right: 8pt
                "
              >
                <img style="width: 18pt; height: 18pt; margin-bottom: 2pt" v-bind:src="getIconSrc('city')" />
                <h5>更换郡守</h5>
								<h5> </h5>
              </div>
							<div 
                style="
                  display: flex; flex-direction: column; align-items: center; border: 2pt solid Black;
                  border-radius: 5pt; padding: 4pt; cursor: pointer;
                "
              >
                <img style="width: 18pt; height: 18pt; margin-bottom: 2pt" v-bind:src="getIconSrc('morale')" />
                <h5>调兵遣将</h5>
								<h5> </h5>
              </div>
            </div>
					</template>
					<template v-else-if="details.data.action !== null && stage === 0">
						<h5></h5>
					</template>
				</div>
      </div>
    </section>
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
    details: function() {
      return this.$store.getters.activeGridDetails;
    }
  },
  methods: {
    leaveGrid: function() {
      this.$store.commit('leaveGrid');
    },
		actionBuild: function() {
			this.$store.commit('actionBuild', this.getCityBuildCost(this.details.data));
		}
  }
});