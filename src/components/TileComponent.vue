<template>
	<div class="tile">
		<p v-if="player1"> Player1 </p>
		<span>No.{{ tile.id }}</span>
		<p v-if="player2"> Player2 </p>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'

	@Component
	export default class TileComponent extends Vue {
		@Prop()
		tile!: any

		player1 = true
		player2 = true
	}
</script>

<style scoped lang="sass">
	@import "../styles/partials/mixins"
	.tile
		height: 150px
		width: 150px
		border: 2px solid #42b983
		padding: 0.5em
		display: flex
		flex-direction: column
		justify-content: space-around
		align-items: center
		margin: 0.5em
		span
			@include fontSize(20px)
</style>
