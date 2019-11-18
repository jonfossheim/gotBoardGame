<template>
	<div id="nav">
		<RouterLink to="/">
			Select Character
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
