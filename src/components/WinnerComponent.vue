<template>
	<div class="winContainer">
		<div class="winDetails">
			<h2>{{ player.name }} has claimed the Iron Throne!</h2>
		</div>
		<div class="winImage">
			<img class="playerIcon" :src="player.icon" :alt="player.name">
		</div>
		<p>
			Congratulations on claiming the iron throne, you rolled like a legend.
		</p>
		<p style="text-align: center">
			What would you like to do next?<br>
		</p>
		<div class="btn__group">
			<RouterLink class="btn" to="/">
				Play again
			</RouterLink>
			<RouterLink class="btn" to="/about">
				About the project
			</RouterLink>
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
	@import "../styles/partials/buttons"
	@import "../styles/partials/mixins"
	.winContainer
		display: flex
		flex-direction: column
		align-items: center
		border: 3px solid slateblue
		width: 90%
		max-width: 600px
		margin: 0 auto
		padding: 2em
		@include border-radius(6px)
		-webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75)
		-moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75)
		box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75)
		.playerIcon
			width: 100%
			max-width: 250px
</style>
