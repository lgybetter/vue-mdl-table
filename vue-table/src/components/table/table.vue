<template>
	<div>
		<table>
			<table-head :columns="columns" :datas="datas"></table-head>
			<table-body :columns="columns" :datas="datas"></table-body>
		</table>
	</div>
</template>

<script>
	import tableHead from './table-head.vue';
	import tableBody from './table-body.vue';

	export default {
		components: {
			'table-head': tableHead,
			'table-body': tableBody
		},
		props: {
			columns: Array,
			datas: Array
		},
		data () {
			return {
			}
		}
	}
</script>