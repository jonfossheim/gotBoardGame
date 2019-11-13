import { VuexModule, Module, action, mutation } from 'vuex-class-component'
import Axios from 'axios'

@Module({ namespacedPath: 'player1/' })
export default class Player1 extends VuexModule {
	player1: any = {
		name: '',
		title: '',
		icon: '',
		tilePos: 0,
		turn: false
	}

	@action
	async getCharacter(id: any) {
		const { data } = await Axios.get('https://anapioficeandfire.com/api/characters/' + id)
		this.setCharacter(data)
	}

	@mutation
	setCharacter(character: any) {
		this.player1.name = character.name
		this.player1.title = character.aliases[0]
		if (this.player1.name === 'Petyr Baelish') {
			this.player1.icon = './characters/petyr.jpg'
		} if (this.player1.name === 'Davos Seaworth') {
			this.player1.icon = './characters/davos.jpg'
		}
	}
}
