
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

const myStateModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

export default myStateModule