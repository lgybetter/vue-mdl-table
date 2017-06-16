<template>
	<thead>
		<tr>
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
			datas: Array
		}
	}

</script>