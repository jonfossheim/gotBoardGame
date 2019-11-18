<template>
	<div class="aboutContainer">
		<div class="aboutContainer__inner">
			<h2>Game created by Jon Fossheim</h2>
			<div class="docsContainer">
				<div class="docsContainer__list">
					<ul>
						<li v-for="item in items" :key="item.id">{{ item.title }}</li>
					</ul>
				</div>
				<div class="docsContainer__content">
					<div v-for="item in items" :key="item.id">
						<h3>{{ item.title }}</h3>
						<p>{{ item.body }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

	@Component({
		components: {}
	})
	export default class About extends Vue {
		uuidv4 = require('uuid/v4')

		items = [
			{
				id: this.uuidv4(),
				title: 'API',
				body: 'https://anapioficeandfire.com/',
			},
			{
				id: this.uuidv4(),
				title: 'VueJS',
				body: 'Project written in VueJS as a challenge for myself. Original task requirement: HTML, CSS and JavaScript.',
			},
			{
				id: this.uuidv4(),
				title: 'Vuex',
				body: 'I use Vuex for statemanagement across the app.',
			},
			{
				id: this.uuidv4(),
				title: 'Vue Router',
				body: 'Vue Router used to achieve no-reload.',
			},
			{
				id: this.uuidv4(),
				title: 'TypeScript',
				body: 'Used for practice.',
			},
			{
				id: this.uuidv4(),
				title: 'SASS',
				body: 'My personal preference for writing CSS.',
			},
		]
	}
</script>

<style scoped lang="sass">
	.aboutContainer
		margin: 0 auto
		width: 90%
		max-width: 1200px

		&__inner
			padding: 1em
			margin-top: 1em

		.docsContainer
			display: grid
			grid-template-columns: 2fr 10fr
			padding: 1em

			&__list
				border-right: 3px solid #2c3e50

			&__content
				padding-left: 1em

</style>
