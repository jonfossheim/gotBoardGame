import { VuexModule, Module } from 'vuex-class-component'

@Module({ namespacedPath: 'characters/' })
export default class Characters extends VuexModule {
	characters: any = [
		{
			id: 823,
			icon: './characters/petyr.webp',
			name: 'Petyr'
		},
		{
			id: 529,
			icon: './characters/jaime.webp',
			name: 'Jaime'
		},
		{
			id: 1052,
			icon: './characters/tyrion.webp',
			name: 'Tyrion'
		},
		{
			id: 217,
			icon: './characters/bronn.webp',
			name: 'Bronn'
		},
		{
			id: 1319,
			icon: './characters/davos.webp',
			name: 'Davos'
		},
		{
			id: 271,
			icon: './characters/daenerys.webp',
			name: 'Daenerys'
		},
		{
			id: 955,
			icon: './characters/sandor.webp',
			name: 'Sandor'
		},
		{
			id: 583,
			icon: './characters/jon.webp',
			name: 'Jon'
		},
		{
			id: 148,
			icon: './characters/arya.webp',
			name: 'Arya'
		},
		{
			id: 216,
			icon: './characters/brienne.webp',
			name: 'Brienne'
		},
	]
}
