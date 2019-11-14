<template>
	<div>
		<h3>You have selected:</h3>
		<div class="imgContainer">
			<img class="icon" :src="player1.icon">
		</div>
		<RouterLink to="/board">
			Confirm Selection
		</RouterLink>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component
	export default class CharacterConfirm extends Vue {
		get player1() {
			return vxm.player1.player1
		}
	}
</script>

<style scoped lang="sass">
	.imgContainer
		width: 75px
		height: 125px
	.icon
		width: 100%
		margin: 0 auto
</style>
