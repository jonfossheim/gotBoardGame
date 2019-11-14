<template>
	<div class="playersContainer">
		<Player1Component />
		<div class="gamestats">
			<h3>Versus</h3>
		</div>
		<Player2Component />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import Player1Component from '@/components/playercomponents/Player1Component.vue'
	import Player2Component from '@/components/playercomponents/Player2Component.vue'

	@Component({
		components: { Player2Component, Player1Component }
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
</style>
