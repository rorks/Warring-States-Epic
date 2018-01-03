Vue.component("grid-details", {
  template: `
    <section 
      style="
        position: fixed; left: 25%; width: 50%; top: 25%; height: 50%; z-index: 2; background-color: PapayaWhip;
        border: 1pt solid DarkGrey; box-shadow:2pt 2pt 5pt DarkSlateGrey; border-radius: 3pt; padding: 4pt 8pt;
        overflow-y: scroll
      "
    >
      <div 
        style="
          display: flex; align-items: center; flex-direction: row; border-bottom: 1pt solid DarkGrey; padding-bottom: 4pt;
          justify-content: space-between
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
        <img style="width: 12pt; height: 12pt; cursor: pointer" v-bind:src="getIconSrc('leave')" v-on:click="leaveGrid" />
      </div>
      <template v-if="this.details.type === 'city'">
        <div style="display: flex; align-items: center; flex-direction: row; padding: 4pt 0">
          <h4 style="margin-right: 8pt">资源:</h4>
          <template v-for="food in getCitiesInfo()[code].food">
            <img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('supply')" />
            <h5 style="margin-right: 8pt">粮食资源</h5>
          </template>
          <template v-for="tax in getCitiesInfo()[code].tax">
            <img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('treasure')" />
            <h5 style="margin-right: 8pt">钱财资源</h5>
          </template>
        </div>
        <div style="display: flex; align-items: center; flex-direction: row; padding: 4pt 0">
          <h4 style="margin-right: 8pt">设施:</h4>
          <img style="width: 10pt; height: 10pt; margin-right: 4pt" v-bind:src="getIconSrc('wall')" />
          <h5 style="margin-right: 8pt">城防等级 {{details.data.build}}</h5>
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
      </template>
    </section>
  `,
  computed: {
    code: function() {
      return store.state.viewGrid;
    },
    details: function() {
      return this.$store.getters.viewGridDetails;
    }
  },
  methods: {
    leaveGrid: function() {
      this.$store.commit('leaveGrid');
    }
  }
});