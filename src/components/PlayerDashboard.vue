<template>
	<div class="playersContainer">
		<Player1Component />
		<div class="gamestats">
			<h3>VS</h3>
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
	@import "../styles/partials/mixins"
	.playersContainer
		display: grid
		grid-template-columns: repeat(3, 1fr)
		width: 100%
		@include border-radius(3px)
		border: 3px solid slateblue
		padding: 1em
	.gamestats
		display: flex
		flex-direction: column
		justify-content: center
		text-align: center
		flex: 1
		min-width: 150px

</style>
