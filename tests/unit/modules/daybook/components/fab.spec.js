import { shallowMount } from "@vue/test-utils";
import FabButton from '@/modules/daybook/components/FabButton.vue'
describe('fab component', () =>{


  it('should display the default icon', () => {
    
    const wrapper = shallowMount(FabButton)

    const itag = wrapper.find('i')
    expect(itag.classes('fa-plus')).toBeTruthy()

  })

  
  it('should display the fa-save icon', () => {
   
    const wrapper = shallowMount(FabButton,{
      props:{
        icon: 'fa-save'
      }
    })

    const classes = wrapper.find('i').classes()
    expect(classes[1]).toBe('fa-save')

  })

  it('should emitted action', () =>{

    const wrapper = shallowMount(FabButton)

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted('fab-button')).toBeTruthy()

  })

})