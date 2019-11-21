<template>
	<div>
		<div class="setPosGroup">
			<div class="setPos">
				<h3>Set P1 Pos</h3>
				<input
					id="p1Pos"
					v-model="p1Pos"
					type="number"
					placeholder="Tilenumber..."
				>
				<input
					type="button"
					value="Set Tile"
					@click="setP1Pos"
				>
			</div>
			<div class="setPos">
				<h3>Set P2 Pos</h3>
				<input
					id="p2Pos"
					v-model="p2Pos"
					type="number"
					placeholder="Tilenumber..."
				>
				<input
					type="button"
					value="Set Tile"
					@click="setP2Pos"
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component
	export default class AdminTools extends Vue {
		p1Pos = 0
		p2Pos = 0

		get player1() {
			return vxm.player1.player1
		}

		get player2() {
			return vxm.player2.player2
		}

		setP1Pos() {
			vxm.player1.updatePos(this.p1Pos)
		}
		setP2Pos() {
			vxm.player2.updatePos(this.p2Pos)
		}
	}
</script>

<style scoped lang="sass">
.setPosGroup
	display: flex

	.setPos
		margin: 1em
		input
			padding: 0.5em
</style>
