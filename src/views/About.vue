<template>
	<div class="aboutContainer">
		<div class="aboutContainer__inner">
			<h2>Game created by Jon Fossheim</h2>
			<div class="docsContainer">
				<div class="docsContainer__list">
					<ul>
						<li>item1</li>
						<li>item2</li>
						<li>item3</li>
						<li>item4</li>
					</ul>
				</div>
				<div class="docsContainer__content">
					<h3>VueJS</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto deserunt dolor ducimus, illum, iure maiores mollitia
						obcaecati odio porro quasi quis quo ratione repudiandae veritatis, voluptate voluptatem voluptatibus voluptatum.
					</p>
					<h3>Vuex</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis fugiat id nam necessitatibus nemo obcaecati
						officiis rem vitae, voluptatum! A commodi minima ratione. Assumenda cupiditate deleniti eaque eligendi odit.
					</p>
					<h3>Vue Router</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores autem cum doloribus eaque est id in, maiores
						molestias nemo non obcaecati officia praesentium quo quod suscipit, totam! Eaque, incidunt!
					</p>
					<h3>SASS</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque corporis, ducimus earum iste iusto, laborum magnam
						molestias non numquam odio odit qui quod recusandae saepe sed temporibus vitae voluptate?
					</p>
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
			grid-template-columns: 1fr 11fr
			padding: 1em

			&__list
				border-right: 3px solid #2c3e50

			&__content
				padding-left: 1em

</style>
