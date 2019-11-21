<template>
	<div class="diceContainer">
		<div class="dice" @click="rollDice()">
			<i
				v-for="dice in diceStats"
				v-show="result === dice.id"
				:id="dice.id"
				:key="dice.id"
				:class="[{spinAnimation : animated }, dice.class]"
				class="fas"
				@click="spinDice(dice.id)"></i>
		</div>
		<div class="highRoll">
			<h3 v-if="result === 6">
				{{ highroller }} rolled a 6!
			</h3>
		</div>
		<transition name="modal">
			<TrapModal v-if="trapmodal.open" />
		</transition>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

	import { vxm } from '@/store'
	import TrapModal from '@/components/TrapModal.vue'

	@Component({
		components: { TrapModal }
	})
	export default class DiceComponent extends Vue {
		lockTurn = false

		result = 0

		animated = false

		highroller = ''

		diceStats = [
			{
				id: 0,
				class: 'fa-dice'
			},
			{
				id: 1,
				class: 'fa-dice-one'
			},
			{
				id: 2,
				class: 'fa-dice-two'
			},
			{
				id: 3,
				class: 'fa-dice-three'
			},
			{
				id: 4,
				class: 'fa-dice-four'
			},
			{
				id: 5,
				class: 'fa-dice-five'
			},
			{
				id: 6,
				class: 'fa-dice-six'
			},
		]

		timeouts = {
			long: 600,
			short: 400
		}

		get player1() {
			return vxm.player1.player1
		}

		get player2() {
			return vxm.player2.player2
		}

		get tiles() {
			return vxm.tiles.tiles
		}

		get trapmodal() {
			return vxm.trapmodal.trapModal
		}

		newTurn() {
			vxm.player1.updateTurn()
			vxm.player2.updateTurn()
		}

		unlockTurn() {
			this.lockTurn = false
		}

		spinDice() {
			let self = this
			self.animated = true
			setTimeout(() => {
				self.animated = false
			}, this.timeouts.long)
		}

		trap(vxmplayer: any, thisplayer: any) {
			let currentTile = this.tiles[thisplayer.tilePos - 1]
			let penalty = currentTile.penalty
			let trapMessage = thisplayer.name + ' ' + currentTile.message
			let payload = {
				player: thisplayer,
				message: trapMessage
			}
			if (thisplayer.tilePos < 30) {
				switch (thisplayer.tilePos) {
					case 7:
						vxmplayer.trapInvoke(penalty)
						vxm.trapmodal.setModalData(payload)
						vxm.trapmodal.updateOpen(true)
						break
					case 13:
						vxmplayer.trapInvoke(penalty)
						vxm.trapmodal.setModalData(payload)
						vxm.trapmodal.updateOpen(true)
						break
					case 19:
						vxmplayer.trapInvoke(penalty)
						vxm.trapmodal.setModalData(payload)
						vxm.trapmodal.updateOpen(true)
						break
					case 22:
						vxmplayer.trapInvoke(penalty)
						vxm.trapmodal.setModalData(payload)
						vxm.trapmodal.updateOpen(true)
						break
					case 29:
						vxmplayer.trapInvoke(penalty)
						vxm.trapmodal.setModalData(payload)
						vxm.trapmodal.updateOpen(true)
						break
					default:
				}
			}
		}

		rollDice() {
			if (!this.lockTurn) {
				this.lockTurn = true
				setTimeout(() => {
					this.unlockTurn()
				}, this.timeouts.long)
				this.result = Math.floor(Math.random() * 6) + 1
				if (this.result === 6) {
					if (this.player1.turn) {
						this.highroller = this.player1.name
						setTimeout(() => {
							vxm.player1.updatePos(this.result)
							setTimeout(() => {
								this.trap(vxm.player1, this.player1)
							}, this.timeouts.short)
						}, this.timeouts.long)
					} else {
						this.highroller = this.player2.name
						setTimeout(() => {
							vxm.player2.updatePos(this.result)
							setTimeout(() => {
								this.trap(vxm.player2, this.player2)
							}, this.timeouts.short)
						}, this.timeouts.long)
					}
				} else {
					if (this.player1.turn) {
						setTimeout(() => {
							vxm.player1.updatePos(this.result)
							setTimeout(() => {
								this.trap(vxm.player1, this.player1)
							}, this.timeouts.short)
						}, this.timeouts.long)
					} else {
						setTimeout(() => {
							vxm.player2.updatePos(this.result)
							setTimeout(() => {
								this.trap(vxm.player2, this.player2)
							}, this.timeouts.short)
						}, this.timeouts.long)
					}
					this.newTurn()
				}
				return this.result
			}
		}
	}
</script>

<style lang="sass">
	.highRoll
		height: 30px
		text-align: center

		.dice
			margin: 5px auto
			cursor: pointer
			display: flex
			justify-content: center
			flex-direction: column
			align-items: center
			font-weight: bolder
			font-size: 20px
			border-radius: 3px
			transition: 0.2s ease

			&:hover
				transform: scale(1.1)

			.fade-enter-active, .fade-leave-active
				transition: opacity .5s

			.fade-enter, .fade-leave-to
				opacity: 0

	.fas
		color: #fff
		font-size: 60px
</style>
