<template>
  <div class="hello">
		<z-table :columns="columns" :datas="datas" :expand="expand"></z-table>
  </div>
</template>

<script>
import table from './table';
export default {
	components: {
		"z-table": table
	},
	data () {
		return {
			expand: {
				render: (h, params) => {
					return h('div', {}, 'test');
				}
			},
			columns: [
				{
					title: '日期',
					key: 'date'
				},
				{
					title: '姓名',
					key: 'name'
				},
				{
					title: '性别',
					key: 'sex'
				},
				{
					title: '操作',
					render: (h, params) => {
						return h('div', [
							h('button', {
								on: {
									click: () => {
										console.log(params.index);
									}
								}
							}, '编辑'),
							h('button', {}, '删除')
						]);
					}
				}
			],
			datas: [
				{
					date: '2017-08-01',
					name: 'lgy',
					sex: '男'
				},
				{
					date: '2017-08-01',
					name: 'lgy',
					sex: '男'
				},
				{
					date: '2017-08-01',
					name: 'lgy',
					sex: '男'
				},
				{
					date: '2017-08-01',
					name: 'lgy',
					sex: '男'
				},
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
	min-height: 800px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
