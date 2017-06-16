<style>
	.w-table { 
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
		box-sizing: border-box;
		font-family: Consolas,Menlo,Courier,monospace;
		font-size: 12px;
		margin-bottom: 24px;
	}
	.w-table * {
		box-sizing: border-box;
	}
	.w-table th { 
		padding: 10px 0 10px 20px; 
		height: 0; 
		min-width: 80px; 
	}
	.w-table th:first-of-type { 
		min-width: 80px; 
	}
  .w-table td{ 
		padding: 0 0 0 20px; 
	}
</style>

<template>
	<table class="w-table">
		<thead is="table-head" :columns="columns" :datas="datas" :canexpanded="canexpanded"></thead>
		<tbody is="table-body" :columns="columns" :datas="datas" :canexpanded="canexpanded" :expand="expand" ></tbody>
	</table>
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
			datas: Array,
			expand: Object
		},
		created () {
			if (this.expand) {
				this.canexpanded = true;
			}
		},
		data () {
			return {
				canexpanded: false
			}
		}
	}
</script>