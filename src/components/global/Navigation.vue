<template>
	<div id="nav">
		<RouterLink to="/">
			Home
		</RouterLink>
		|
		<RouterLink to="/board">
			Board
		</RouterLink>
		|
		<RouterLink to="/about">
			About
		</RouterLink>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

	@Component
	export default class Navigation extends Vue {
	}
</script>

<style scoped lang="sass">

</style>
