<template>
	<div>
		<render :row="row" :render="row.render" :index="index"></render>
	</div>
</template>

<script>
	import render from './render.js';
	export default {
		components: {
			render
		},
		data () {
			return {
				index: 1,
				row: {
					render: (h, params) => {
						return h('button',{
							on: {
								click: () => {
									console.log(this.index);
								}
							}
						}, '测试动态渲染按钮');
					}
				}
			}
		}
	}
</script>