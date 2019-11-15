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
				} else {
					vxm.player2.updatePos(this.result)
				}
			} else {
				if (this.turn) {
					vxm.player1.updatePos(this.result)
				} else {
					vxm.player2.updatePos(this.result)
				}
				this.newTurn()
			}
			return this.result
		}
	}
</script>

<style scoped lang="sass">

</style>
