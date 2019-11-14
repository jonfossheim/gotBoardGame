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
	import CharacterComponent from '@/components/playercomponents/Player1Component.vue'
	import CharacterSelectComponent from '@/components/CharacterSelectComponent.vue'
	import { vxm } from '@/store'

	@Component({
		components: { CharacterSelectComponent, CharacterComponent }
	})
	export default class CharacterSelect extends Vue {
		get characters() {
			return vxm.characters.characters
		}
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
