<template>
	<thead>
		<tr>
			<th v-if="canexpanded"></th>
			<th v-for="column in columns">
				{{column.title}}
			</th>
		</tr>
	</thead>
</template>

<script>
	export default {
		props: {
			columns: Array,
			datas: Array,
			canexpanded: Boolean
		}
	}

</script>