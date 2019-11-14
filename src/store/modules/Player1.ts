import { VuexModule, Module, action, mutation } from 'vuex-class-component'
import Axios from 'axios'

@Module({ namespacedPath: 'player1/' })
export default class Player1 extends VuexModule {
	player1: any = {
		name: '',
		title: '',
		birth: '',
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
		this.player1.birth = 'Birth: ' + character.born

		if (this.player1.name === 'Petyr Baelish') {
			this.player1.icon = './characters/petyr.png'
		}
		if (this.player1.name === 'Davos Seaworth') {
			this.player1.icon = './characters/davos.png'
		}
		if (this.player1.name === 'Tyrion Lannister') {
			this.player1.icon = './characters/tyrion.png'
		}
		if (this.player1.name === 'Bronn') {
			this.player1.icon = './characters/bronn.png'
		}
		if (this.player1.name === 'Jaime Lannister') {
			this.player1.icon = './characters/jaime.png'
		}
		if (this.player1.name === 'Daenerys Targaryen') {
			this.player1.icon = './characters/daenerys.png'
		}
		if (this.player1.name === 'Sandor Clegane') {
			this.player1.icon = './characters/sandor.png'
		}
		if (this.player1.name === 'Jon Snow') {
			this.player1.icon = './characters/jon.png'
		}
		if (this.player1.name === 'Arya Stark') {
			this.player1.icon = './characters/arya.png'
		}
		if (this.player1.name === 'Brienne of Tarth') {
			this.player1.icon = './characters/brienne.png'
		}
	}
}
