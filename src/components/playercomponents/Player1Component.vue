<template>
	<div :class="{ isActive__right : player1.turn }" class="character">
		<div class="character__inner">
			<div class="imageContainer">
				<img class="imageContainer__playerImg" :src="player1.icon">
			</div>
			<div class="character__inner--details">
				<h2>{{ player1.name }}</h2>
				<h3>{{ player1.title }}</h3>
				<p>Current Score: {{ player1.tilePos }}</p>
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
	export default class Player1Component extends Vue {
		get player1() {
			return vxm.player1.player1
		}
	}
</script>

<style lang="sass">

</style>
