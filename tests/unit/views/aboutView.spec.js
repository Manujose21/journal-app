import AboutView from '@/views/AboutView.vue'
import { shallowMount } from '@vue/test-utils'

describe('About view test snapshot', () =>{

  it('snapshot', ()=>{
    const about = shallowMount(AboutView)
    expect(about.html()).toMatchSnapshot()
  })
})