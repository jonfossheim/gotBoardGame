<template>
	<div>
		<h1>{{ character.name }}</h1>
		<DiceComponent @click="updatePos(result)" />
		<button @click="updatePos(3)">
			update
		</button>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import DiceComponent from '@/components/DiceComponent.vue'
	@Component({
		components: { DiceComponent }
	})
	export default class CharacterComponent extends Vue {
		@Prop()
		character!: any
		result!: number

		updatePos(result: number) {
			this.character.tilePos = this.character.tilePos + result
			return this.character.tilePos
		}
	}
</script>

<style scoped lang="sass">

</style>
