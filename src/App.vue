<template>
	<div id="app">
		<Header />
		<RouterView />
		<AdminTools />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import Header from '@/components/global/Header.vue'
	import AdminTools from '@/components/global/AdminTools.vue'
	@Component({
		components: { AdminTools, Header }
	})
	export default class App extends Vue {
	}
</script>

<style lang="sass">
#app
	padding: 1em
</style>
