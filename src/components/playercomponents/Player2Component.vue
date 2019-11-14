<template>
	<div class="character">
		<div class="character__inner">
			<div class="image__container">
				<img :src="player2.icon">
			</div>
			<div class="character__inner--details">
				<h1>{{ player2.name }}</h1>
				<h2>{{ player2.title }}</h2>
				<p>{{ player2.birth }} </p>
				<p> Your turn? : {{ player2.turn }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component({
		components: {}
	})
	export default class Player2Component extends Vue {
		get player2() {
			return vxm.player2.player2
		}
	}
</script>

<style scoped lang="sass">
	.character
		display: flex
		justify-content: space-around

		.character__inner
			display: flex
			flex-direction: row-reverse
			flex-wrap: wrap
			margin: 1em
			width: 600px
			text-align: right

		.character__inner--details
			padding-left: 1em

		.image__container
			margin: 0.5em
			width: 75px

		img
			width: 100%
</style>
