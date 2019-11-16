<template>
	<div class="tile">
		<p v-if="player1.tilePos === tile.id">
			<img class="playerIcon" :src="player1.icon" :alt="player1.name">
		</p>
		<span>No.{{ tile.id }}</span>
		<span>{{ tile.trap }}</span>
		<p v-if="player2.tilePos === tile.id">
			<img class="playerIcon" :src="player2.icon" :alt="player2.name">
		</p>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component
	export default class TileComponent extends Vue {
		@Prop()
		tile!: any

		isTrap = this.tile.trap

		get player1() {
			return vxm.player1.player1
		}
		get player2() {
			return vxm.player2.player2
		}
		@Watch('isTrap')
		onPropertyChanged(value: string, oldValue: string) {
			// Do stuff with the watcher here.
		}
	}
</script>

<style scoped lang="sass">
	@import "../styles/partials/mixins"
	.tile
		height: 175px
		width: 75px
		border: 2px solid #42b983
		padding: 0.5em
		display: flex
		flex-direction: column
		justify-content: space-around
		align-items: center
		margin: 0.5em
		span
			@include fontSize(20px)
	.playerIcon
		width: 50px
</style>
