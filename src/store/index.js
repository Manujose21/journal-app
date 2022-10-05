import { createStore } from 'vuex'
import daybook from '@/modules/daybook/store/daybookStore'
import auth from '@/modules/auth/store/auth-store'

const store = createStore({
  modules:{
    auth,
    daybook
  }
})

export default store