<template>
	<div id="app">
		<Header />
		<RouterView />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import Header from '@/components/global/Header.vue'
	@Component({
		components: { Header }
	})
	export default class App extends Vue {
	}
</script>

<style scoped lang="sass">
#app
	padding: 1em
</style>
