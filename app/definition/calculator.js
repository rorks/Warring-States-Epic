Vue.mixin({
  methods: {
    getCityFoodGain: function(cityData, cityInfo) {
      return (cityInfo.food + 1) * cityData.enhance * 5;
    },
    getCityTaxGain: function(cityData, cityInfo) {
      return (cityInfo.tax + 1) * cityData.enhance * 5;
    },
  }
});