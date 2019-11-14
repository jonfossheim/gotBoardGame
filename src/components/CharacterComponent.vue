<template>
	<div class="character">
		<div class="character__inner">
			<img :src="player1.icon">
			<div class="character__inner--details">
				<h1>{{ player1.name }}</h1>
				<h2>{{ player1.title }}</h2>
				<p>{{ player1.birth }} </p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component({})
	export default class CharacterComponent extends Vue {
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
	width: 600px
.character__inner--details
	padding-left: 1em
img
	width: 150px
</style>
