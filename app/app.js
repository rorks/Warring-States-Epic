var app = new Vue({
  el: '#app',
  store: store,
  computed: {
    activeGrid: function() {
      return store.state.activeGrid;
    }
  }
});