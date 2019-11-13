<template>
	<div>
		<h1>{{ player1.name }}</h1>
		<p>{{ player1.title }}</p>
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

		mounted() {
			vxm.player1.getCharacter()
		}
	}
</script>

<style scoped lang="sass">

</style>
