Vue.mixin({
  methods: {
    AIdomisticsDecision: function () {
      let random = Math.floor(Math.random() * 2);
      switch(random) {
        case 0:
          return 'build';
        case 1:
          return 'enhance';
      }
    }
  }
});

