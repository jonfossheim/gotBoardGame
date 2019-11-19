<template>
	<div class="header">
		<h1>
			<RouterLink class="header__link" to="/">
				Race for the Iron Throne
			</RouterLink>
		</h1>
		<nav id="nav">
			<RouterLink to="/about">
				About
			</RouterLink>
		</nav>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

	@Component({
		components: { }
	})
	export default class Header extends Vue {
	}
</script>

<style scoped lang="sass">
	.header
		display: grid
		width: 100%
		grid-template-columns: 11fr 1fr
		&__link
			text-decoration: none
			color: #ecf0f1
</style>
