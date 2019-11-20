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

		excludeId = this.characters[Math.floor(Math.random() * this.characters.length)].id

		get characters() {
			return vxm.characters.characters
		}

		randomId() {

		}

		setPlayer2(p1Character: any) {
			let excludeIndex = this.characters.map(function (item: any) {
				return item.id
			}).indexOf(p1Character)
			let id = this.characters[Math.floor(Math.random() * this.characters.length)].id
			if (id !== excludeIndex) {
				vxm.player2.getCharacter(id)
			} else {
				let id = this.characters[Math.floor(Math.random() * this.characters.length)].id
			}
		}

		assignCharacter(id: any) {
			vxm.player1.getCharacter(id)
			this.setPlayer2(id)
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
