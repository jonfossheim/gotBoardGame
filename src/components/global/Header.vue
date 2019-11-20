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
			<span class="separator">|</span>
			<a href="https://paypal.me/jonfossheim" target="_blank">Buy me Coffee</a>
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
		grid-template-columns: 10fr 2fr
		&__link
			text-decoration: none
			color: #ecf0f1

	.separator
		margin: 0 0.5em 0 0.5em
</style>
