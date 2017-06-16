<template>
  <div class="hello">
		<z-table></z-table>
  </div>
</template>

<script>
import table from './table';
export default {
	components: {
		"z-table": table
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
