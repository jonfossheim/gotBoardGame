<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<h2>
							Oh no, {{ trapmodal.playerName }} hit a trap!
						</h2>
					</div>

					<div class="modal-body">
						<img :src="trapmodal.playerIcon" :alt="trapmodal.playerName">
						<br>
						<p>{{ trapmodal.body }}</p>
					</div>

					<div class="modal-footer">
						<button class="modal-default-button" @click="updateState(false)">
							Continue
						</button>
					</div>
				</div>
			</div>
		</div>
	</transition>
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
	.modal-mask
		position: fixed
		z-index: 9998
		top: 0
		left: 0
		width: 100%
		height: 100%
		background-color: rgba(0, 0, 0, .5)
		display: table
		transition: opacity .3s ease

		.modal-wrapper
			display: table-cell
			vertical-align: middle

		.modal-container
			width: 600px
			margin: 0px auto
			padding: 2em 3em
			background-color: #fff
			border-radius: 2px
			box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
			transition: all .3s ease

		.modal-header h3
			margin-top: 0
			color: #42b983

		.modal-body
			margin: 20px 0

		.modal-footer
			height: 20px

		.modal-default-button
			float: right
			padding: 8px

		.modal-enter
			opacity: 0

		.modal-leave-active
			opacity: 0

		.modal-enter .modal-container,
		.modal-leave-active .modal-container
			-webkit-transform: scale(1.1)
			transform: scale(1.1)
</style>
