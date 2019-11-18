<template>
	<div class="header">
		<h1>Race for the Iron Throne</h1>
		<Navigation />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import Navigation from '@/components/global/Navigation.vue'
	@Component({
		components: { Navigation }
	})
	export default class Header extends Vue {
	}
</script>

<style scoped lang="sass">
.header
	display: grid
	width: 100%
	grid-template-columns: 9fr 3fr
</style>
