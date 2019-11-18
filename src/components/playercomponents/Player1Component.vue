<template>
	<div :class="{ isActive : player1.turn }" class="character">
		<div class="character__inner">
			<div class="image__container">
				<img :src="player1.icon">
			</div>
			<div class="character__inner--details">
				<h2>{{ player1.name }}</h2>
				<h3>{{ player1.title }}</h3>
				<p>Current Score: {{ player1.tilePos }}</p>
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
	export default class Player1Component extends Vue {
		active = this.player1.turn
		get player1() {
			return vxm.player1.player1
		}
	}
</script>

<style scoped lang="sass">
	@import "../../styles/partials/mixins"
	.character
		display: flex
		justify-content: space-around
		border-top: 3px solid transparent
		border-right: 3px solid transparent
	.isActive
		background: rgba(159, 90, 253, 0.2)
		@include border-radius(6px)

	.character__inner
		display: flex
		flex-direction: row
		flex-wrap: wrap
		margin: 1em

	.character__inner--details
		padding-left: 1em

	.image__container
		width: 75px

	img
		width: 100%

</style>
