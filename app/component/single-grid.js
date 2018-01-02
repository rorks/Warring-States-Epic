Vue.component("single-grid", {
  props: ['cities', 'code'],
  template: `
    <div 
      class="single-location"
      v-bind:style="{
        borderColor: checkGridActive(code) ? 'lightgrey' : 'transparent',
        backgroundColor: typeof cities[code] !== 'undefined' ? getStatesInfo()[cities[code].state].color : 'transparent'
      }"
    >
			<template v-if="typeof cities[code] !== 'undefined'">
				<h5>
					{{getCitiesInfo()[code].name}}
				</h5>
			</template>
    </div>
  `
});