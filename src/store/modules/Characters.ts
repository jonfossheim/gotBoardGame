import { VuexModule, Module } from 'vuex-class-component'

@Module({ namespacedPath: 'characters/' })
export default class Characters extends VuexModule {
	characters: any = [
		{
			id: 823,
			icon: './characters/petyr.png',
			name: 'Petyr'
		},
		{
			id: 529,
			icon: './characters/jaime.png',
			name: 'Jaime Lannister'
		},
		{
			id: 1052,
			icon: './characters/tyrion.png',
			name: 'Tyrion Lannister'
		},
		{
			id: 217,
			icon: './characters/bronn.png',
			name: 'Bronn'
		},
		{
			id: 1319,
			icon: './characters/davos.png',
			name: 'Davos'
		},
		{
			id: 271,
			icon: './characters/daenerys.png',
			name: 'Daenerys Targaryen'
		},
		{
			id: 955,
			icon: './characters/sandor.png',
			name: 'Sandor Clegane'
		},
		{
			id: 583,
			icon: './characters/jon.png',
			name: 'Jon Snow'
		},
		{
			id: 148,
			icon: './characters/arya.png',
			name: 'Arya Stark'
		},
		{
			id: 216,
			icon: './characters/brienne.png',
			name: 'Brienne of Tarth'
		},
	]
}
