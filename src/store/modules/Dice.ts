import { VuexModule, Module, mutation } from 'vuex-class-component'

@Module({ namespacedPath: 'dice/' })
export default class Dice extends VuexModule {
	dice: any = {
		result: 0,
		sides: [
			{
				id: 0,
				class: 'fa-dice'
			},
			{
				id: 1,
				class: 'fa-dice-one'
			},
			{
				id: 2,
				class: 'fa-dice-two'
			},
			{
				id: 3,
				class: 'fa-dice-three'
			},
			{
				id: 4,
				class: 'fa-dice-four'
			},
			{
				id: 5,
				class: 'fa-dice-five'
			},
			{
				id: 6,
				class: 'fa-dice-six'
			},
		],
		highroller: '',
		gameStarted: false
	}

	@mutation
	setResult(result: any) {
		this.dice.result = result
	}
	@mutation
	setHighroller(playerName: any) {
		this.dice.highroller = playerName
	}
	@mutation
	startGame() {
		this.dice.gameStarted = true
	}
}
