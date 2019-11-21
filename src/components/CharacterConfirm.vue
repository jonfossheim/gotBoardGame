<template>
	<div>
		<div class="confirmContainer">
			<div class="imgContainer">
				<img class="icon" :src="player1.icon">
			</div>
			<div class="selectDetails">
				<p>You have selected:</p>
				<p> {{ player1.name }}</p>
			</div>
		</div>
		<div class="confirm">
			<RouterLink class="btn" to="/board">
				Confirm Selection
			</RouterLink>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'
	import RoundedButton from '@/components/RoundedButton.vue'

	@Component({
		components: { RoundedButton }
	})
	export default class CharacterConfirm extends Vue {
		get player1() {
			return vxm.player1.player1
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
	.confirm
		display: flex
		justify-content: center
</style>
