<template>
	<div>
		<div class="confirmContainer">
			<div class="imgContainer">
				<img class="icon" :src="player2.icon">
			</div>
			<div class="selectDetails">
				<p>Player2 has selected:</p>
				<p> {{ player2.name }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component({
		components: { }
	})
	export default class CharacterConfirm2 extends Vue {
		get player2() {
			return vxm.player2.player2
		}
	}
</script>

<style scoped lang="sass">
	.imgContainer
		width: 100px
		margin-bottom: 0.5em
	.icon
		width: 100%
		margin: 0 auto
	.confirmContainer
		display: flex
		flex-direction: row-reverse
		flex-wrap: wrap
	.selectDetails
		padding: 1em
		margin-right: 1em
</style>
