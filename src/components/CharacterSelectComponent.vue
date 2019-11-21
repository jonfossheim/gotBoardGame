<template>
	<div class="iconContainer">
		<div>
			<img
				class="icon"
				:src="character.icon"
				:alt="character.name"
				@click="assignCharacter(character.id)"
				@mouseover="mouseOver"
				@mouseleave="mouseOver"
			/>
			<div class="captContainer">
				<transition name="fade">
					<p v-show="hover">
						{{ character.name }}
					</p>
				</transition>
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
	export default class CharacterSelectComponent extends Vue {
		@Prop()
		character!: any
		hover = false

		get characters() {
			return vxm.characters.characters
		}
		get player1() {
			return vxm.player1.player1
		}

		get player2() {
			return vxm.player2.player2
		}

		assignCharacter(id: number) {
			if (!this.player1.populated) {
				vxm.player1.getCharacter(id)
				vxm.player2.updateSelect()
			} else {
				vxm.player2.getCharacter(id)
				vxm.player1.updateSelect()
			}
		}

		setPlayer2(excludeId: number) {
			let randomId = this.characters[Math.floor(Math.random() * this.characters.length)].id
			if (randomId === excludeId) {
				while (randomId === excludeId) {
					randomId = this.characters[Math.floor(Math.random() * this.characters.length)].id
				}
			} else {
				vxm.player2.getCharacter(randomId)
			}
		}

		mouseOver() {
			this.hover = !this.hover
		}
	}
</script>

<style scoped lang="sass">
	@import "../styles/partials/animations"
	.iconContainer
		width: 175px
		margin: 1em

		.icon
			width: 100%
			margin: 0 auto

		.captContainer
			text-align: center
			height: 10px

</style>
