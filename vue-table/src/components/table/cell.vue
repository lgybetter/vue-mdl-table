<template>
	<div>
		<template v-if="renderType === 'normal'"><span v-html="row["render"]"></span></template>
	</div>
</template>

<script>
	import Vue from 'vue';

	export default {
		props: {
			row: Object,
			column: Object
		},
		data () {
			return {
				renderType: 'normal'
			}
		}
	}
</script>