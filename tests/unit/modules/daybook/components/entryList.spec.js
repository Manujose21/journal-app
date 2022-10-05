 
import { shallowMount } from "@vue/test-utils"
import { createStore } from 'vuex'
import { daybookState } from '../../../mock-data/test-data.js'
import daybook from '@/modules/daybook/store/daybookStore'
import EntryList from '@/modules/daybook/components/EntryList.vue'

const createVuexStore = ( initialState ) => 
createStore({
  modules: {
    daybook : {
      ...daybook,
      state: { ...initialState }
    }
  }
})

 describe('' , () =>{  

  const store = createVuexStore( daybookState )
  const mockRouter = {
    push: jest.fn()
  }

  let wrapper ;

  beforeEach(() => {

    jest.clearAllMocks()

    wrapper = shallowMount(EntryList, {
      global:{
        mocks:{
          $router: mockRouter
        },
        plugins: [ store ]
      },
    })

  })

  it('snapshot', () => {
    expect(wrapper.findAll('entry-stub').length).toBe(2)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('search entry', async () => {

    const input = wrapper.find('input')

    await input.setValue('axios')

    expect(wrapper.findAll('entry-stub').length).toBe(1)

  })

  it('new entry button', () =>{

    wrapper.find('button').trigger('click')

    expect(mockRouter.push).toHaveBeenCalled()
    expect(mockRouter.push).toHaveBeenCalledWith({name: 'entry-view', params:{ entry: 'new' } })
    

  })

 })