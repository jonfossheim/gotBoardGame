<template>
	<div class="winContainer">
		<div class="winDetails">
			<h2>{{ player.name }} has claimed the Iron Throne!</h2>
		</div>
		<div class="winImage">
			<img class="playerIcon" :src="player.icon" :alt="player.name">
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'

	@Component
	export default class WinnerComponent extends Vue {
		@Prop()
		player!: any
	}
</script>

<style scoped lang="sass">
.winContainer
	display: flex
	flex-direction: column
	align-items: center
	.playerIcon
		width: 100%
		max-width: 600px
</style>
