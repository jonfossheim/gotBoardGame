<template>
	<div class="home">
		<h1>home</h1>
		<DiceComponent />
		<CharacterSelect />
		<CharacterComponent />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import CharacterSelect from '@/components/CharacterSelect.vue'
	import DiceComponent from '@/components/DiceComponent.vue'
	import CharacterComponent from '@/components/CharacterComponent.vue'
	@Component({
		components: { CharacterComponent, DiceComponent, CharacterSelect }
	})
	export default class Home extends Vue {
	}
</script>

<style scoped lang="sass">

</style>
