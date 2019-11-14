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
				icon: './characters/petyr.png',
				name: 'Petyr'
			},
			{
				id: 1319,
				icon: './characters/davos.png',
				name: 'Davos'
			},
			{
				id: 1052,
				icon: './characters/tyrion.png',
				name: 'Tyrion Lannister'
			},
			{
				id: 217,
				icon: './characters/bronn.png',
				name: 'Bronn'
			},
			{
				id: 529,
				icon: './characters/jaime.png',
				name: 'Jaime Lannister'
			},
			{
				id: 271,
				icon: './characters/daenerys.png',
				name: 'Daenerys Targaryen'
			},
			{
				id: 955,
				icon: './characters/sandor.png',
				name: 'Sandor Clegane'
			},
			{
				id: 583,
				icon: './characters/jon.png',
				name: 'Jon Snow'
			},
			{
				id: 148,
				icon: './characters/arya.png',
				name: 'Arya Stark'
			},
			{
				id: 216,
				icon: './characters/brienne.png',
				name: 'Brienne of Tarth'
			},
		]
	}
</script>

<style scoped lang="sass">
	.selectComponents
		display: flex
		flex-direction: row
		flex-wrap: wrap
		width: 80%
		margin: 0 auto
		justify-content: space-around

</style>
