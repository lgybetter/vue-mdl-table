<template>
	<tbody>
		<tr v-for="data in datas">
			<td v-for="column in columns">
				<cell :column="column" :data="data"></cell>
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