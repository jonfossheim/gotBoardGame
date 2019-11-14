<template>
	<div id="app">
		<div id="nav">
			<RouterLink to="/">
				Home
			</RouterLink>
			|
			<RouterLink to="/board">
				Board
			</RouterLink>
			|
			<RouterLink to="/about">
				About
			</RouterLink>
		</div>
		<h1>Race for the Iron Throne</h1>
		<RouterView />
	</div>
</template>

<style lang="sass">
</style>
