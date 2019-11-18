<template>
	<div :class="{ isActive : player2.turn }" class="character">
		<div class="character__inner">
			<div class="image__container">
				<img :src="player2.icon">
			</div>
			<div class="character__inner--details">
				<h2>{{ player2.name }}</h2>
				<h3>{{ player2.title }}</h3>
				<p>Current Score: {{ player2.tilePos }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component({
		components: {}
	})
	export default class Player2Component extends Vue {
		get player2() {
			return vxm.player2.player2
		}
	}
</script>

<style scoped lang="sass">
	@import "../../styles/partials/mixins"
	.character
		display: flex
		justify-content: space-around
		border-top: 3px solid transparent
		border-left: 3px solid transparent
	.isActive
		background: rgba(159, 90, 253, 0.2)
		@include border-radius(6px)
	.character__inner
		display: flex
		flex-direction: row-reverse
		flex-wrap: wrap
		margin: 1em
		text-align: right

	.character__inner--details
		padding-left: 1em

	.image__container
		margin: 0.5em
		width: 75px

	img
		width: 100%
</style>
