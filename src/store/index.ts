import Vue from 'vue'
import Vuex from 'vuex'
import Player1 from '@/store/modules/Player1'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		player1: Player1.ExtractVuexModule(Player1)
	}
})

export default store

export const vxm = {
	player1: Player1.CreateProxy(store, Player1)
}
