<template>
	<div :class="{ isActive__left : player2.turn }" class="character">
		<div class="character__inner character__inner--reverse">
			<div class="imageContainer">
				<img class="imageContainer__playerImg" :src="player2.icon">
			</div>
			<div class="character__inner--details">
				<h2>{{ player2.name }}</h2>
				<h3>{{ player2.title }}</h3>
				<p>Current Score: {{ player2.tilePos }}</p>
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

</style>
