<template>
	<div class="home">
		<h3>Select your character below</h3>
		<div class="confirmContainer">
			<CharacterConfirm v-if="player1.name"/>
		</div>
		<CharacterSelect />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import CharacterSelect from '@/components/CharacterSelect.vue'
	import CharacterConfirm from '@/components/CharacterConfirm.vue'
	import { vxm } from '@/store'
	@Component({
		components: { CharacterConfirm, CharacterSelect }
	})
	export default class Home extends Vue {
		get player1() {
			return vxm.player1.player1
		}
	}
</script>

<style scoped lang="sass">
.confirmContainer
	height: 20vh
	display: flex
	flex-direction: row
	justify-content: space-around
	margin-bottom: 1.5em
</style>
