import { VuexModule, Module } from 'vuex-class-component'

@Module({ namespacedPath: 'tiles/' })
export default class Tiles extends VuexModule {
	tiles: any = [
		{
			id: 1,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 2,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 3,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 4,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 5,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 6,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 7,
			trap: true,
			message: 'hit tile 7, and the three eyed raven needs a lift. Go back 3 steps.',
			penalty: 3,
			icon: './icons/raven.svg'
		},
		{
			id: 8,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 9,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 10,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 11,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 12,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 13,
			trap: true,
			message: 'hit tile 13, and some midget shanked their leg. Go back 5 steps...',
			penalty: 5,
			icon: './icons/knife.svg'
		},
		{
			id: 14,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 15,
			trap: false,
			message: '',
			penalty: 0
		},
		{
			id: 16,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 17,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 18,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 19,
			trap: true,
			message: 'hit tile 19 and steps on a worm, breaking down in tears. Go back 1 step.',
			penalty: 1,
			icon: './icons/worm.svg'
		},
		{
			id: 20,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 21,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 22,
			trap: true,
			message: 'hit tile 22 and Geoffrey wants to marry them. They need to set up the red wedding. Go back 2 steps',
			penalty: 2,
			icon: './icons/ring.svg'
		},
		{
			id: 23,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 24,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 25,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 26,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 27,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 28,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
		{
			id: 29,
			trap: true,
			message: 'hit tile 29 and aggressively fistbumps their partner and break their own hand. Go back 5 steps.',
			penalty: 5,
			icon: './icons/fist.svg'
		},
		{
			id: 30,
			trap: false,
			message: '',
			penalty: 0,
			icon: ''
		},
	]
}
