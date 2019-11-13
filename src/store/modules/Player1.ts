import { VuexModule, Module, action, mutation } from 'vuex-class-component'
import Axios from 'axios'

@Module({ namespacedPath: 'player1/' })
export default class Player1 extends VuexModule {
	player1: any = {
		name: 'Player1',
		title: 'Player number 1',
		icon: 'icon',
		tilePos: 0,
		turn: false
	}

	@action
	async getCharacter() {
		const { data } = await Axios.get('https://anapioficeandfire.com/api/characters?name=Viserys+Targaryen')
		this.setCharacter(data[0])
	}

	@mutation
	setCharacter(character: any) {
		this.player1.name = character.name
		this.player1.title = character.aliases[0]
	}
}
