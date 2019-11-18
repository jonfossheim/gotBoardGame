<template>
	<div class="tilesContainer">
		<TileComponent
			v-for="tile in tiles"
			:key="tile.id"
			:tile="tile"
		/>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import TileComponent from '@/components/TileComponent.vue'
	import { vxm } from '@/store'
	@Component({
		components: { TileComponent }
	})
	export default class TileDeck extends Vue {
		get tiles() {
			return vxm.tiles.tiles
		}
	}
</script>

<style scoped lang="sass">
	.tilesContainer
		display: flex
		flex-wrap: wrap
		justify-content: space-around
		margin-top: 0.2em

</style>
