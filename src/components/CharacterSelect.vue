<template>
	<div>
		<CharacterComponent v-for="character in characters" :key="character.id" :character="character" />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import CharacterComponent from '@/components/CharacterComponent.vue'
	@Component({
		components: { CharacterComponent }
	})
	export default class CharacterSelect extends Vue {
		characters = [
			{
				id: 1,
				name: 'Jon Snow',
				title: 'King of the North',
				tilePos: 0
			},
			{
				id: 2,
				name: 'Danerys Something',
				title: 'Whore of the North',
				tilePos: 0
			},
		]
	}
</script>

<style scoped lang="sass">

</style>
