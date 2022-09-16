import { createStore } from 'vuex'
import daybook from '@/modules/daybook/store/daybookStore'

const store = createStore({
  modules:{
    daybook
  }
})

export default store