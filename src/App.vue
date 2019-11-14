<template>
	<div id="app">
		<h1>Race for the Iron Throne</h1>
		<RouterView />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

	@Component
	export default class App extends Vue {
	}
</script>

<style scoped lang="sass">
#app
	padding: 1em
</style>
