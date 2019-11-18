<template>
	<div>
		<button @click="rollDice()">
			<span> Roll the dice </span>
		</button>
		<br>
		<span>You rolled: {{ result }}</span>
		<br>
		<span v-if="player1.turn">It is {{ player1.name }}'s turn.</span>
		<span v-if="player2.turn">It is {{ player2.name }}'s turn.</span>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component
	export default class DiceComponent extends Vue {
		result = 0
		get player1() {
			return vxm.player1.player1
		}

		get player2() {
			return vxm.player2.player2
		}

		get tiles() {
			return vxm.tiles.tiles
		}

		newTurn() {
			vxm.player1.updateTurn()
			vxm.player2.updateTurn()
		}

		trap(vxmplayer: any, thisplayer:any) {
			let currentTile = this.tiles[thisplayer.tilePos - 1]
			let penalty = currentTile.penalty
			let trapMessage = currentTile.message
			switch (thisplayer.tilePos) {
				case 7:
					vxmplayer.trapInvoke(penalty)
					alert(thisplayer.name + ' ' + trapMessage)
					break
				case 13:
					vxmplayer.trapInvoke(penalty)
					alert(thisplayer.name + ' ' + trapMessage)
					break
				case 19:
					vxmplayer.trapInvoke(penalty)
					alert(thisplayer.name + ' ' + trapMessage)
					break
				case 22:
					vxmplayer.trapInvoke(penalty)
					alert(thisplayer.name + ' ' + trapMessage)
					break
				case 29:
					vxmplayer.trapInvoke(penalty)
					alert(thisplayer.name + ' ' + trapMessage)
					break
				default:
			}
		}

		rollDice() {
			this.result = Math.floor(Math.random() * 6) + 1
			if (this.result === 6) {
				if (this.player1.turn) {
					vxm.player1.updatePos(this.result)
					this.trap(vxm.player1, this.player1)
				} else {
					vxm.player2.updatePos(this.result)
					this.trap(vxm.player2, this.player2)
				}
			} else {
				if (this.player1.turn) {
					vxm.player1.updatePos(this.result)
					this.trap(vxm.player1, this.player1)
				} else {
					vxm.player2.updatePos(this.result)
					this.trap(vxm.player2, this.player2)
				}
				this.newTurn()
			}
			return this.result
		}
	}
</script>

<style scoped lang="sass">

</style>
