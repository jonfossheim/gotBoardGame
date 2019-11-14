<template>
	<div>
		<CharacterComponent />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import CharacterComponent from '@/components/CharacterComponent.vue'

	@Component({
		components: { CharacterComponent }
	})
	export default class Board extends Vue {
	}
</script>

<style scoped lang="sass">

</style>
