<template>
	<div>
		<RouterLink to="/">
			Change Character and Reset
		</RouterLink>
		<PlayerDashboard />
		<TileDeck />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import PlayerDashboard from '@/components/PlayerDashboard.vue'
	import TileComponent from '@/components/TileComponent.vue'
	import TileDeck from '@/components/TileDeck.vue'

	@Component({
		components: { TileDeck, TileComponent, PlayerDashboard }
	})
	export default class Board extends Vue {
	}
</script>

<style scoped lang="sass">

</style>
