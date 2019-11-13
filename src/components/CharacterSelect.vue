<template>
	<div class="selectComponents">
		<CharacterSelectComponent
			v-for="character in characters"
			:key="character.id"
			class="selectComponent"
			:character="character"
		/>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import CharacterComponent from '@/components/CharacterComponent.vue'
	import CharacterSelectComponent from '@/components/CharacterSelectComponent.vue'

	@Component({
		components: { CharacterSelectComponent, CharacterComponent }
	})
	export default class CharacterSelect extends Vue {
		characters = [
			{
				id: 823,
				icon: './characters/petyr.jpg',
				name: 'Petyr'
			},
			{
				id: 1319,
				icon: './characters/davos.jpg',
				name: 'Davos'
			}
		]
	}
</script>

<style scoped lang="sass">
	.selectComponents
		display: flex
		flex-direction: row
		width: 80%
		margin: 0 auto
		justify-content: space-around

</style>
