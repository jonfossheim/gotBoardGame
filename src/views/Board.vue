<template>
	<div>
		<RouterLink to="/">
			Change Character and Reset
		</RouterLink>
		<PlayerDashboard />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import PlayerDashboard from '@/components/PlayerDashboard.vue'

	@Component({
		components: { PlayerDashboard }
	})
	export default class Board extends Vue {
	}
</script>

<style scoped lang="sass">

</style>
