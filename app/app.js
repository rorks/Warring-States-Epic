var app = new Vue({
  el: '#app',
  store: store,
  computed: {
    viewGrid: function() {
      return store.state.viewGrid;
    }
  }
});