<template>
	<RouterLink
		tag="button"
		class="circle-button"
		:to="to"
	>
		<span>Confirm Selection</span>
	</RouterLink>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'

	@Component
	export default class RoundedButton extends Vue {
		@Prop({ type: String, default: null }) to!: string | null
	}
</script>

<style scoped lang="sass">
@import "../styles/partials/variables"
@import "../styles/partials/mixins"
.circle-button
	padding: 6px 15px
	@include border-radius(6px)
	background-color: lightslategray
	border: none
	cursor: pointer
	span
		@include fontSize(16px)
		font-weight: bold
		color: white
</style>
