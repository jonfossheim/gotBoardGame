<template>
	<div class="diceContainer">
		<div class="dice" @click="rollDice()">
			<transition name="fade">
				<!--<span>{{ result }}</span>-->
				<span v-if="result === 1"><i class="fas fa-dice-one"></i></span>
				<span v-if="result === 2"><i class="fas fa-dice-two"></i></span>
				<span v-if="result === 3"><i class="fas fa-dice-three"></i></span>
				<span v-if="result === 4"><i class="fas fa-dice-four"></i></span>
				<span v-if="result === 5"><i class="fas fa-dice-five"></i></span>
				<span v-if="result === 6"><i class="fas fa-dice-six"></i></span>
				<span v-else><i class="fas fa-dice"></i></span>
			</transition>
		</div>
		<span>Roll the Dice above</span>
		<br>
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
		result = 0
		highroller = ''

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

		trap(vxmplayer: any, thisplayer: any) {
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

		rollDice() {
			this.result = Math.floor(Math.random() * 6) + 1
			if (this.result === 6) {
				if (this.player1.turn) {
					this.highroller = this.player1.name
					vxm.player1.updatePos(this.result)
					this.trap(vxm.player1, this.player1)
				} else {
					this.highroller = this.player2.name
					vxm.player2.updatePos(this.result)
					this.trap(vxm.player2, this.player2)
				}
			} else {
				if (this.player1.turn) {
					vxm.player1.updatePos(this.result)
					this.trap(vxm.player1, this.player1)
				} else {
					vxm.player2.updatePos(this.result)
					this.trap(vxm.player2, this.player2)
				}
				this.newTurn()
			}
			return this.result
		}
	}
</script>

<style lang="sass">
	.dice
		margin: 5px auto
		cursor: pointer
		display: flex
		justify-content: center
		align-items: center
		font-weight: bolder
		font-size: 20px
		border-radius: 3px
		transition: 0.2s ease

		&:hover
			transform: scale(1.1)

	.highRoll
		height: 30px
		width: 100%

	.fade-enter-active, .fade-leave-active
		transition: opacity .5s

	.fade-enter, .fade-leave-to
		opacity: 0

	i
		color: #fff
		font-size: 60px
</style>
