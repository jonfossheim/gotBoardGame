<template>
	<div class="iconContainer">
		<img class="icon " :src="character.icon" @click="assignCharacter(character.id)">
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component
	export default class CharacterSelectComponent extends Vue {
		@Prop()
		character!: any

		get characters() {
			return vxm.characters.characters
		}

		setPlayer2(p1Character: any) {
			let excludeIndex = this.characters.map(function(item:any) { return item.id }).indexOf(p1Character)
			let id = this.characters[Math.floor(Math.random() * this.characters.length)].id
			vxm.player2.getCharacter(id)
		}

		assignCharacter(id: any) {
			vxm.player1.getCharacter(id)
			this.setPlayer2(id)
		}
	}
</script>

<style scoped lang="sass">
	.iconContainer
		width: 175px
		margin: 1em
	.icon
		width: 100%
		margin: 0 auto
		border-radius: 50px
</style>
