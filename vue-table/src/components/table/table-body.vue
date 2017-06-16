<template>
	<tbody>
		<template v-for="(data, index) in datas">
			<tr>
				<td v-if="canExpanded"><button @click="toggleExpand(index)">></button></td>
				<td v-for="column in columns">
					<cell :column="column" :data="data" :index="index"></cell>
				</td>
			</tr>
			<tr>
				<td v-if="expandIndex === index && canExpanded">
					<render :render="expand.render"></render>
				</td>
			</tr>
		</template>
	</tbody>
</template>

<script>
	import cell from './cell.vue';
	import render from './render.js';
	export default {
		props: {
			columns: Array,
			datas: Array,
			canExpanded: Boolean,
			expand: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data () {
			return {
				expandIndex: -1
			}
		},
		components: {
			cell,
			render
		},
		methods: {
			toggleExpand (index) {
				if(index === this.expandIndex) {
					this.expandIndex = -1;
				} else {
					this.expandIndex = index;
				}
			}
		}
	}
</script>