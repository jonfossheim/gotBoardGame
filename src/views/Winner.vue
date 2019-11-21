<template>
	<WinnerComponent v-if="player1.tilePos >= 30" :player="player1" />
	<WinnerComponent v-else-if="player2.tilePos >= 30" :player="player2" />
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component
	export default class Winner extends Vue {
		get player1() {
			return vxm.player1.player1
		}

		get player2() {
			return vxm.player2.player2
		}
	}
</script>

<style scoped lang="sass">

</style>
