<template>
	<div>
		<button @click="rollDice()">
			<span> Roll the dice </span>
		</button>
		<br>
		<span>You rolled: {{ result }}</span>
		<br>
		<span v-if="turn">It is {{ player1.name }}'s turn.</span>
		<span v-if="!turn">It is {{ player2.name }}'s turn.</span>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component
	export default class DiceComponent extends Vue {
		result = 0
		turn = true

		p1CurrentTile = this.tiles[this.player1.tilePos]
		p2CurrentTile = this.tiles[this.player2.tilePos]

		get player1() {
			return vxm.player1.player1
		}

		get player2() {
			return vxm.player2.player2
		}

		get tiles() {
			return vxm.tiles.tiles
		}

		newTurn () {
			this.turn = !this.turn
		}
		rollDice () {
			this.result = Math.floor(Math.random() * 6) + 1
			if (this.result === 6) {
				if (this.turn) {
					vxm.player1.updatePos(this.result)
					switch (this.player1.tilePos) {
						case 7:
							vxm.player1.trapInvoke(this.p1CurrentTile.penalty)
							alert(this.player1.name + ' has hit a trap')
							break
						case 13:
							vxm.player1.trapInvoke(this.p1CurrentTile.penalty)
							alert(this.player1.name + ' has hit a trap')
							break
						case 19:
							vxm.player1.trapInvoke(this.p1CurrentTile.penalty)
							alert(this.player1.name + ' has hit a trap')
							break
						case 22:
							vxm.player1.trapInvoke(this.p1CurrentTile.penalty)
							alert(this.player1.name + ' has hit a trap')
							break
						case 29:
							vxm.player1.trapInvoke(this.p1CurrentTile.penalty)
							alert(this.player1.name + ' has hit a trap')
							break
						default:
					}
				} else {
					vxm.player2.updatePos(this.result)
					switch (this.player2.tilePos) {
						case 7:
							vxm.player2.trapInvoke(this.p2CurrentTile.penalty)
							alert(this.player2.name + ' has hit a trap')
							break
						case 13:
							vxm.player2.trapInvoke(this.p2CurrentTile.penalty)
							alert(this.player2.name + ' has hit a trap')
							break
						case 19:
							vxm.player2.trapInvoke(this.p2CurrentTile.penalty)
							alert(this.player2.name + ' has hit a trap')
							break
						case 22:
							vxm.player2.trapInvoke(this.p2CurrentTile.penalty)
							alert(this.player2.name + ' has hit a trap')
							break
						case 29:
							vxm.player2.trapInvoke(this.p2CurrentTile.penalty)
							alert(this.player2.name + ' has hit a trap')
							break
						default:
					}
				}
			} else {
				if (this.turn) {
					vxm.player1.updatePos(this.result)
					switch (this.player1.tilePos) {
						case 7:
							vxm.player1.trapInvoke(this.p1CurrentTile.penalty)
							alert(this.player1.name + ' has hit a trap')
							break
						case 13:
							vxm.player1.trapInvoke(this.p1CurrentTile.penalty)
							alert(this.player1.name + ' has hit a trap')
							break
						case 19:
							vxm.player1.trapInvoke(this.p1CurrentTile.penalty)
							alert(this.player1.name + ' has hit a trap')
							break
						case 22:
							vxm.player1.trapInvoke(this.p1CurrentTile.penalty)
							alert(this.player1.name + ' has hit a trap')
							break
						case 29:
							vxm.player1.trapInvoke(this.p1CurrentTile.penalty)
							alert(this.player1.name + ' has hit a trap')
							break
						default:
					}
				} else {
					vxm.player2.updatePos(this.result)
					switch (this.player2.tilePos) {
						case 7:
							vxm.player2.trapInvoke(this.p2CurrentTile.penalty)
							alert(this.player2.name + ' has hit a trap')
							break
						case 13:
							vxm.player2.trapInvoke(this.p2CurrentTile.penalty)
							alert(this.player2.name + ' has hit a trap')
							break
						case 19:
							vxm.player2.trapInvoke(this.p2CurrentTile.penalty)
							alert(this.player2.name + ' has hit a trap')
							break
						case 22:
							vxm.player2.trapInvoke(this.p2CurrentTile.penalty)
							alert(this.player2.name + ' has hit a trap')
							break
						case 29:
							vxm.player2.trapInvoke(this.p2CurrentTile.penalty)
							alert(this.player2.name + ' has hit a trap')
							break
						default:
					}
				}
				this.newTurn()
			}
			return this.result
		}
	}
</script>

<style scoped lang="sass">

</style>
