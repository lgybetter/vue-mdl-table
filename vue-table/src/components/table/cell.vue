<template>
	<div>
		<template v-if="renderType === 'normal'">
			<span v-html="data[column.key]"></span>
		</template>
		<template v-if="renderType === 'expand'">
		</template>
		<render v-if="renderType === 'render'" :render="column.render" :column="column" :data="data" :index="index">
		</render>
	</div>
</template>

<script>
	import render from './render.js';

	export default {
		components: {
			render
		},
		props: {
			column: Object,
			data: Object,
			index: Number
		},
		data () {
			return {
				renderType: ''
			}
		},
		created () {
			if (this.column.type === 'expand') {
				this.renderType = 'expand';
			} else if (this.column.render) {
				this.renderType = 'render';
			} else {
				this.renderType = 'normal';
			}
		}
	}
</script>