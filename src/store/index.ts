import Vue from 'vue'
import Vuex from 'vuex'
import Player1 from '@/store/modules/Player1'
import Player2 from '@/store/modules/Player2'
import Characters from '@/store/modules/Characters'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		player1: Player1.ExtractVuexModule(Player1),
		player2: Player2.ExtractVuexModule(Player2),
		characters: Characters.ExtractVuexModule(Characters)

	}
})

export default store

export const vxm = {
	player1: Player1.CreateProxy(store, Player1),
	player2: Player2.CreateProxy(store, Player2),
	characters: Characters.CreateProxy(store, Characters)
}
