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

		assignCharacter(id: any) {
			vxm.player1.getCharacter(id)
		}
	}
</script>

<style scoped lang="sass">
	.iconContainer
		width: 200px
		margin: 1em
	.icon
		width: 100%
		margin: 0 auto
		border-radius: 50px
</style>
