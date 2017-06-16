<template>
	<tbody>
		<tr v-for="(data, index) in datas">
			<td v-for="column in columns">
				<cell :column="column" :data="data" :index="index"></cell>
			</td>
		</tr>
	</tbody>
</template>

<script>
	import cell from './cell.vue';
	export default {
		props: {
			columns: Array,
			datas: Array
		},
		components: {
			cell
		}
	}
</script>