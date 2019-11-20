<template>
	<div class="tile">
		<div class="tileInner">
			<transition name="bounce">
				<div v-if="player1.tilePos === tile.id">
					<img class="playerIcon" :src="player1.icon" :alt="player1.name">
				</div>
			</transition>
			<transition name="bounce">
				<div v-if="player2.tilePos === tile.id">
					<img class="playerIcon" :src="player2.icon" :alt="player2.name">
				</div>
			</transition>
		</div>
		<p class="watermark">
			<span>No.{{ tile.id }}</span>
		</p>
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
		border: 3px solid darkslateblue
		@include border-radius(6px)
		margin: 0.2em
		position: relative
		-webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75)
		-moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75)
		box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75)
		span
			@include fontSize(14px)
	.tileInner
		display: flex
		justify-content: space-around
		align-items: center
		padding: 0.3em
		z-index: 100
	.watermark
		position: absolute
		bottom: 2px
		right: 5px
		z-index: -100
		color: lightslategray
	.playerIcon
		width: 50px

</style>
