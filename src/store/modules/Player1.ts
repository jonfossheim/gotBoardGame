import { VuexModule, Module, action, mutation } from 'vuex-class-component'
import Axios from 'axios'

@Module({ namespacedPath: 'player1/' })
export default class Player1 extends VuexModule {
	player1: any = {
		id: 0,
		name: '',
		title: '',
		icon: '',
		tilePos: 0,
		turn: true,
		populated: false
	}

	@action
	async getCharacter(id: any) {
		const { data } = await Axios.get('https://anapioficeandfire.com/api/characters/' + id)
		this.setCharacter(data)
	}

	@mutation
	setCharacter(character: any) {
		this.player1.id = character.id
		this.player1.name = character.name
		this.player1.title = character.aliases[0]
		this.player1.tilePos = 0
		this.player1.turn = true
		this.player1.populated = true

		if (this.player1.name === 'Petyr Baelish') {
			this.player1.icon = './characters/petyr.webp'
		}
		if (this.player1.name === 'Davos Seaworth') {
			this.player1.icon = './characters/davos.webp'
		}
		if (this.player1.name === 'Tyrion Lannister') {
			this.player1.icon = './characters/tyrion.webp'
		}
		if (this.player1.name === 'Bronn') {
			this.player1.icon = './characters/bronn.webp'
		}
		if (this.player1.name === 'Jaime Lannister') {
			this.player1.icon = './characters/jaime.webp'
		}
		if (this.player1.name === 'Daenerys Targaryen') {
			this.player1.icon = './characters/daenerys.webp'
		}
		if (this.player1.name === 'Sandor Clegane') {
			this.player1.icon = './characters/sandor.webp'
		}
		if (this.player1.name === 'Jon Snow') {
			this.player1.icon = './characters/jon.webp'
		}
		if (this.player1.name === 'Arya Stark') {
			this.player1.icon = './characters/arya.webp'
		}
		if (this.player1.name === 'Brienne of Tarth') {
			this.player1.icon = './characters/brienne.webp'
		}
	}

	@mutation
	updatePos(roll: number) {
		this.player1.tilePos = this.player1.tilePos + roll
	}

	@mutation
	trapInvoke(penalty: number) {
		this.player1.tilePos = this.player1.tilePos - penalty
	}

	@mutation
	updateTurn() {
		this.player1.turn = !this.player1.turn
	}

	@mutation
	updateSelect() {
		this.player1.populated = !this.player1.populated
	}
}
