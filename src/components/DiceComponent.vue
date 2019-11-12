<template>
	<div>
		<button :result="dice.result" @click="dice.roll()">
			<span> Roll the dice </span>
		</button>
		<br>
		<span>Roll Result: {{ dice.result }}</span>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

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
	}
</script>

<style scoped lang="sass">

</style>
