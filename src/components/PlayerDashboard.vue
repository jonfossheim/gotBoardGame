<template>
	<div class="playersContainer">
		<Player1Component />
		<div class="gamestats">
			<h3>Versus</h3>
			<DiceComponent />
		</div>
		<Player2Component />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import Player2Component from '@/components/playercomponents/Player2Component.vue'
	import DiceComponent from '@/components/DiceComponent.vue'
	import Player1Component from '@/components/playercomponents/Player1Component.vue'

	@Component({
		components: { Player1Component, DiceComponent, Player2Component }
	})
	export default class PlayerDashboard extends Vue {
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
		flex: 1
		border-right: 2px solid #2c3e50
		border-left: 2px solid #2c3e50
		min-width: 150px

</style>
