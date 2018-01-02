Vue.mixin({
  methods: {
    //return current langauge in use
    getActiveLanguage: function() {
      var available = [zh];
      return available[0];
    },
    //return true for active grid on map
    checkGridActive: function(code) {
      var inactive = [
        '1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9', '1-10', '1-11', '1-12', '1-13',
        '2-1', '2-2', '2-3', '2-4',
        '3-1', '3-2', '3-3', '3-4', '3-17', '3-18', '3-19', '3-20',
        '4-1', '4-2', '4-3', '4-16', '4-17', '4-18', '4-19', '4-20',
        '5-1', '5-20',
        '6-1', '6-18', '6-19', '6-20',
        '7-1', '7-18', '7-19', '7-20',
        '8-19', '8-20',
        '9-20',
        '10-20',
        '11-1', '11-2', '11-3', '11-4', '11-20',
        '12-1', '12-2', '12-3', '12-4', '12-16', '12-17', '12-18', '12-19', '12-20'
      ];
      return inactive.indexOf(code) === -1;
    },
    //return cities info
    getCitiesInfo: function() {
      return {
        '2-6': {name: '云中西'}
      }
    },
    //return states info
    getStatesInfo: function() {
      return [
        {code: 0, color: 'DarkGrey'}
      ]
    }
  }
});