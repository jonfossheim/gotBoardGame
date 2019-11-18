<template>
	<div class="tile">
		<transition name="bounce">
			<p v-if="player1.tilePos === tile.id">
				<img class="playerIcon" :src="player1.icon" :alt="player1.name">
			</p>
		</transition>
		<span>No.{{ tile.id }}</span>
		<transition name="bounce">
			<p v-if="player2.tilePos === tile.id">
				<img class="playerIcon" :src="player2.icon" :alt="player2.name">
			</p>
		</transition>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component
	export default class TileComponent extends Vue {
		@Prop()
		tile!: any

		get player1() {
			return vxm.player1.player1
		}
		get player2() {
			return vxm.player2.player2
		}
	}
</script>

<style scoped lang="sass">
	@import "../styles/partials/mixins"
	@import "../styles/partials/animations"
	.tile
		height: 125px
		width: 125px
		border: 3px solid #42b983
		display: flex
		flex-direction: column
		justify-content: space-around
		align-items: center
		margin: 0.3em
		span
			@include fontSize(20px)
	.playerIcon
		width: 50px

</style>
