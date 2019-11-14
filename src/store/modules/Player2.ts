import { VuexModule, Module, action, mutation } from 'vuex-class-component'
import Axios from 'axios'

@Module({ namespacedPath: 'player2/' })
export default class Player2 extends VuexModule {
	player2: any = {
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
		this.player2.name = character.name
		this.player2.title = character.aliases[0]
		this.player2.birth = 'Birth: ' + character.born

		if (this.player2.name === 'Petyr Baelish') {
			this.player2.icon = './characters/petyr.png'
		}
		if (this.player2.name === 'Davos Seaworth') {
			this.player2.icon = './characters/davos.png'
		}
		if (this.player2.name === 'Tyrion Lannister') {
			this.player2.icon = './characters/tyrion.png'
		}
		if (this.player2.name === 'Bronn') {
			this.player2.icon = './characters/bronn.png'
		}
		if (this.player2.name === 'Jaime Lannister') {
			this.player2.icon = './characters/jaime.png'
		}
		if (this.player2.name === 'Daenerys Targaryen') {
			this.player2.icon = './characters/daenerys.png'
		}
		if (this.player2.name === 'Sandor Clegane') {
			this.player2.icon = './characters/sandor.png'
		}
		if (this.player2.name === 'Jon Snow') {
			this.player2.icon = './characters/jon.png'
		}
		if (this.player2.name === 'Arya Stark') {
			this.player2.icon = './characters/arya.png'
		}
		if (this.player2.name === 'Brienne of Tarth') {
			this.player2.icon = './characters/brienne.png'
		}
	}
}
