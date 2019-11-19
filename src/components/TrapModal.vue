<template>
	<div class="modal">
		<div class="modal__wrapper">
			<div class="modal__container">
				<div class="modal__header">
					<h2>
						Oh no, {{ trapmodal.playerName }} hit a trap!
					</h2>
				</div>
				<div class="modal__body">
					<img class="modal-image" :src="trapmodal.playerIcon" :alt="trapmodal.playerName">
					<br>
					<p>{{ trapmodal.body }}</p>
				</div>
				<div class="modal__footer">
					<button class="btn btn__modal" @click="updateState(false)">
						Continue
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component
	export default class TrapModal extends Vue {
		get trapmodal() {
			return vxm.trapmodal.trapModal
		}

		updateState(state: boolean) {
			return vxm.trapmodal.updateOpen(state)
		}
	}
</script>

<style scoped lang="sass">
	@import "../styles/partials/mixins"
	@import "../styles/partials/buttons"
	.modal
		position: fixed
		z-index: 9998
		top: 0
		left: 0
		width: 100%
		height: 100%
		background-color: rgba(0, 0, 0, .5)
		display: table
		transition: opacity .3s ease
		&__wrapper
			display: table-cell
			vertical-align: middle
		&__container
			width: 100%
			max-width: 600px
			margin: 0px auto
			padding: 2em 3em
			background-color: #fff
			border-radius: 2px
			box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
			transition: all .3s ease
			border: 3px solid slateblue
			@include border-radius(6px)
		&__header h3
			margin-top: 0
			color: #42b983
		&__body
			margin: 20px 0
		&__image
			width: 100%
			max-width: 250px
		&__footer
			height: 20px

</style>
