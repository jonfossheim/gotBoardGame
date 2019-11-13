<template>
	<div class="characterSelectCard">
		<img class="icon" :src="character.icon">
		<button class="btn" @click="assignCharacter(character.id)">
			<span> {{ character.name }} </span>
		</button>
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
.characterSelectCard
	height: 100px
	width: 100px
	padding: 0.5em
	margin: 2em
	display: flex
	flex-direction: column

.icon
	width: 75px
	margin: 0 auto
</style>
