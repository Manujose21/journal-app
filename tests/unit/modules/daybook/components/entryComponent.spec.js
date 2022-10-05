import { shallowMount } from '@vue/test-utils'
import EntryComponent from '@/modules/daybook/components/EntryComponent.vue'
import { daybookState } from '../../../mock-data/test-data'

describe('tests entry component', ()=>{
  
  const mockRouter = {
    push: jest.fn()
  }
  
  const wrapper = shallowMount(EntryComponent, {
    props:{
      entry : daybookState.entries[0]
    },
    global:{
      mocks:{
        $router: mockRouter
      }
    }
  })
  
  
  it(' match with the snapshot ', () => {
  
    expect(wrapper.html()).toMatchSnapshot()

  })

  it('should redirect', () => {

    wrapper.find('.pointer').trigger('click')

    expect(mockRouter.push).toHaveBeenCalledWith({
      name: 'entry-view',
      params:{
        entry: daybookState.entries[0].id
      }
    })

  })

  it('date compuputed', () => {

    expect(wrapper.vm.date).toBe('23 Septiembre 2022, Viernes ')

  })

})
