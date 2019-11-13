<template>
	<div>
		<button @click="assignCharacter(823)">
			Petyr
		</button>
		<div>
			<h1>{{ player1.name }}</h1>
			<h2>{{ player1.title }}</h2>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import CharacterComponent from '@/components/CharacterComponent.vue'
	import { vxm } from '@/store'

	@Component({
		components: { CharacterComponent }
	})
	export default class CharacterSelect extends Vue {
		get player1() {
			return vxm.player1.player1
		}

		assignCharacter(id: any) {
			vxm.player1.getCharacter(id)
		}
	}
</script>

<style scoped lang="sass">

</style>
