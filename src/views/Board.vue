<template>
	<div>
		<WinnerComponent v-if="player1.tilePos >= 30" :player="player1" />
		<WinnerComponent v-else-if="player2.tilePos >= 30" :player="player2" />
		<div v-else>
			<PlayerDashboard />
			<TileDeck />
		</div>
		<RouterLink to="/">
			Change Character and Reset
		</RouterLink>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import PlayerDashboard from '@/components/PlayerDashboard.vue'
	import TileComponent from '@/components/TileComponent.vue'
	import TileDeck from '@/components/TileDeck.vue'
	import { vxm } from '@/store'
	import WinnerComponent from '@/components/WinnerComponent.vue'

	@Component({
		components: { WinnerComponent, TileDeck, TileComponent, PlayerDashboard }
	})
	export default class Board extends Vue {
		get player1() {
			return vxm.player1.player1
		}
		get player2() {
			return vxm.player2.player2
		}
	}
</script>

<style scoped lang="sass">

</style>
