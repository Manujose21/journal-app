
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

const daybookState = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

export default daybookState