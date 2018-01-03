const getters = {
  viewGridDetails: function(state) {
    if (typeof state.cities[state.viewGrid] === 'undefined') {
      return {}
    } else {
      return {
        type: 'city',
        data: state.cities[state.viewGrid]
      }
    }
  }
}