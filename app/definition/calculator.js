Vue.mixin({
  methods: {
    getCityFoodGain: function(cityData, cityInfo) {
      let ratio = cityData.hero === null ? 
        1 : (this.getHerosInfo()[cityData.hero].food === 0 ? 1 : 1.5);
      return parseInt((cityInfo.food + 1) * cityData.enhance * 5 * ratio);
    },
    getCityTaxGain: function(cityData, cityInfo) {
      let ratio = cityData.hero === null ? 
        1 : (this.getHerosInfo()[cityData.hero].tax === 0 ? 1 : 1.5);
      return parseInt((cityInfo.tax + 1) * cityData.enhance * 5 * ratio);
    },
    getCityArmyResource: function(cityData) {
      let ratio = cityData.hero === null ? 
        1 : (this.getHerosInfo()[cityData.hero].recruit === 0 ? 1 : 1.5);
      return parseInt(cityData.build * ratio);
    },
    getCityBuildCost: function(cityData) {
      let ratio = cityData.hero === null ? 
        1 : (this.getHerosInfo()[cityData.hero].build === 0 ? 1 : 0.5);
      return 100 * (cityData.build + 1) * ratio;
    },
    getCityEnhanceCost: function(cityData) {
      let ratio = cityData.hero === null ? 
        1 : (this.getHerosInfo()[cityData.hero].enhance === 0 ? 1 : 0.5);
      return 100 * (cityData.enhance + 1) * ratio;
    }
  }
});