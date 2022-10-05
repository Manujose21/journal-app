import HomeView from '@/views/HomeView.vue'
import { shallowMount } from '@vue/test-utils'

describe('tests home view ', ()=>{
  it('snapshot component', ()=>{
    const wrapper = shallowMount(HomeView)

    expect(wrapper.html()).toMatchSnapshot()

  })

  it('router click button', ()=>{
   
    const mockRouter = {
      push: jest.fn()
    }
    
    const wrapper = shallowMount(HomeView, {
      global:{
        mocks:{
          $router: mockRouter
        }
      }
    })
    
    wrapper.find('button').trigger('click')

    expect(mockRouter.push).toHaveBeenCalled()
    expect(mockRouter.push).toHaveBeenCalledWith( { name: "not-entry" } )
    
  })
})