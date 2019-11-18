import { VuexModule, Module, mutation } from 'vuex-class-component'

@Module({ namespacedPath: 'trapmodal/' })
export default class TrapModal extends VuexModule {
	trapModal: any = {
		playerName: '',
		body: '',
		playerIcon: '',
		open: false
	}

	@mutation
	setModalData(payload: any) {
		this.trapModal.playerName = payload.player.name
		this.trapModal.body = payload.message
		this.trapModal.playerIcon = payload.player.icon
	}
	@mutation
	updateOpen(state: boolean) {
		this.trapModal.open = state
	}
}
