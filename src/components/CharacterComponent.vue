<template>
	<div>
		<h1>{{ player1.name }}</h1>
		<h2>{{ player1.title }}</h2>
		<img :src="player1.icon">
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import { vxm } from '@/store'

	@Component({
	})
	export default class CharacterComponent extends Vue {
		get player1() {
			return vxm.player1.player1
		}
	}
</script>

<style scoped lang="sass">

</style>
