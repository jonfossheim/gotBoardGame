<template>
	<div>
		<button @click="dice.roll(), newTurn()">
			<span> Roll the dice </span>
		</button>
		<br>
		<span>Roll Result: {{ dice.result }}</span>
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
		dice = {
			sides: 6,
			result: 0,
			roll: function () {
				this.result = Math.floor(Math.random() * this.sides) + 1
				return this.result
			}
		}

		turn = true

		get player1() {
			return vxm.player1.player1
		}

		get player2() {
			return vxm.player2.player2
		}

		newTurn () {
			this.turn = !this.turn
		}
	}
</script>

<style scoped lang="sass">

</style>
