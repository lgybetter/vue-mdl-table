<template>
	<tbody>
		<template v-for="(data, index) in datas">
			<tr>
				<td v-if="canExpanded"><button @click="expandRow(index)">></button></td>
				<td v-for="column in columns">
					<cell :column="column" :data="data" :index="index"></cell>
				</td>
			</tr>
			<tr v-if="canExpanded">
				<td>
				</td>
			</tr>
		</template>
	</tbody>
</template>

<script>
	import cell from './cell.vue';
	export default {
		props: {
			columns: Array,
			datas: Array,
			canExpanded: Boolean
		},
		components: {
			cell
		},
		methods: {
			expandRow (index) {
				console.log(index);
			}
		}
	}
</script>