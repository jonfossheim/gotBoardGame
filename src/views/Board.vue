<template>
	<div>
		<RouterLink to="/">
			Change Character and Reset
		</RouterLink>
		<div class="playersContainer">
			<Player1Component />
			<div class="gamestats">
				<h3>Versus</h3>
				<DiceComponent />
			</div>
			<Player2Component />
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import Player1Component from '@/components/playercomponents/Player1Component.vue'
	import Player2Component from '@/components/playercomponents/Player2Component.vue'
	import DiceComponent from '@/components/DiceComponent.vue'

	@Component({
		components: { DiceComponent, Player2Component, Player1Component }
	})
	export default class Board extends Vue {
	}
</script>

<style scoped lang="sass">
.playersContainer
	display: flex
	flex-direction: row
	justify-content: space-around
	width: 100%
.gamestats
	display: flex
	flex-direction: column
	justify-content: center
	text-align: center
</style>
