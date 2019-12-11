<template>
	<div class="diceContainer">
		<div class="dice" @click="rollDice()">
			<i
				v-for="side in dice.sides"
				v-show="dice.result === side.id"
				:id="side.id"
				:key="side.id"
				:class="[{spinAnimation : animated },{bounce : !dice.gameStarted}, side.class]"
				class="fas"
				@click="spinDice(dice.id)"></i>
		</div>
		<div class="highRoll">
			<h3 v-if="dice.result === 6">
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

		animated = false

		highroller = ''

		timeouts = {
			long: 600,
			short: 400
		}

		get dice() {
			return vxm.dice.dice
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
			if (thisplayer.tilePos < 30) {
				let currentTile = this.tiles[thisplayer.tilePos - 1]
				let penalty = currentTile.penalty
				let trapMessage = thisplayer.name + ' ' + currentTile.message
				let payload = {
					player: thisplayer,
					message: trapMessage
				}
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
			vxm.dice.startGame()
			if (!this.lockTurn) {
				this.lockTurn = true
				setTimeout(() => {
					this.unlockTurn()
				}, 1000)
				let roll = Math.floor(Math.random() * 6) + 1
				vxm.dice.setResult(roll)
				if (this.dice.result === 6) {
					if (this.player1.turn) {
						this.highroller = this.player1.name
						setTimeout(() => {
							vxm.player1.updatePos(this.dice.result)
							setTimeout(() => {
								this.trap(vxm.player1, this.player1)
							}, this.timeouts.short)
						}, this.timeouts.long)
					} else {
						this.highroller = this.player2.name
						setTimeout(() => {
							vxm.player2.updatePos(this.dice.result)
							setTimeout(() => {
								this.trap(vxm.player2, this.player2)
							}, this.timeouts.short)
						}, this.timeouts.long)
					}
				} else {
					if (this.player1.turn) {
						setTimeout(() => {
							vxm.player1.updatePos(this.dice.result)
							setTimeout(() => {
								this.trap(vxm.player1, this.player1)
							}, this.timeouts.short)
						}, this.timeouts.long)
					} else {
						setTimeout(() => {
							vxm.player2.updatePos(this.dice.result)
							setTimeout(() => {
								this.trap(vxm.player2, this.player2)
							}, this.timeouts.short)
						}, this.timeouts.long)
					}
					setTimeout(() => {
						this.newTurn()
					}, 800)
				}
			}
		}
	}
</script>

<style lang="sass">
	@import "../styles/partials/mixins"
	.startGame
		margin-top: 0.7em
		width: 100%

		&__inner
			width: 150px
			background-color: #e74c3c
			margin: 0 auto
			@include border-radius(6px)

	.highRoll
		height: 30px
		text-align: center

	.fas
		color: #fff
		font-size: 60px
		cursor: pointer

	.bounce
		animation: bounce 0.8s
		animation-direction: alternate
		animation-iteration-count: infinite
</style>
