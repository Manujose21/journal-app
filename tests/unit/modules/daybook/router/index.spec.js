import routerDaybook from '@/modules/daybook/router'

describe('tests in the routes daybook ',()=>{

  it('the routes must have this configuration', () => {

    expect(routerDaybook).toMatchObject({
      name: "daybook",
      component:  expect.any( Function ),
      children: [
        {
          path: "",
          name: "not-entry",
          component:  expect.any( Function ),
    
        },
        {
          path: ":entry",
          name: "entry-view",
          component: expect.any( Function ), 
          props: expect.any( Function )
        
        }   
      ]
    }) 

  })

  it('render component success', async ()=>{

    const promisesDaybook = []

    routerDaybook.children.forEach( child => promisesDaybook.push(child.component()))

    const resolve = (await Promise.all(promisesDaybook)).map( val => val.default.name)
    
    expect(resolve).toContain('NotEntrySelected')
    expect(resolve).toContain('EntryView')

  })

  it('is receiving the id', ()=>{
    const route = {
      params: {
        entry : 'ABC-123'
      }
    }

    const entryId = routerDaybook.children.find( child => child.name === 'entry-view' )
    expect(entryId.props( route )).toEqual( { id :'ABC-123'} )
  })


})