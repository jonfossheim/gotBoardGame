<template>
	<div class="character">
		<div class="character__inner">
			<div class="image__container">
				<img :src="player1.icon">
			</div>
			<div class="character__inner--details">
				<h1>{{ player1.name }}</h1>
				<h2>{{ player1.title }}</h2>
				<p>{{ player1.birth }} </p>
				<p>Current Score: {{ player1.tilePos }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component({
		components: {}
	})
	export default class Player1Component extends Vue {
		get player1() {
			return vxm.player1.player1
		}
	}
</script>

<style scoped lang="sass">
	.character
		display: flex
		justify-content: space-around

	.character__inner
		display: flex
		flex-direction: row
		flex-wrap: wrap
		margin: 1em

	.character__inner--details
		padding-left: 1em

	.image__container
		width: 75px

	img
		width: 100%

</style>
