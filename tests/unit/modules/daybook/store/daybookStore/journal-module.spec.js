import { createStore } from 'vuex'
import daybook from '@/modules/daybook/store/daybookStore'
import { daybookState } from '../../../../mock-data/test-data'

const createVuexStore = ( initialState ) => 
  createStore({
    modules: {
      daybook : {
        ...daybook,
        state: { ...initialState }
      }
    }
  })
  

  describe('Store tests vuex', () => {

    it("must have the same state", () =>{
      
      const store = createVuexStore(daybookState)

      const {  isLoading, entries } = store.state.daybook

      expect(isLoading).toBeFalsy()
      expect(entries).toEqual(daybookState.entries)

    })

    // Mutations

    it('mutations: tests', () =>{
      const store = createVuexStore({ isLoading: true, entries: [] })

      store.commit('daybook/setEntries', daybookState.entries)
      
      expect(store.state.daybook.entries.length).toBe(2)
      
      store.commit('daybook/setEntries', daybookState.entries)

      expect(store.state.daybook.entries.length).toBe(2)


      expect(store.state.daybook.isLoading).toBeFalsy()

    })

    it('mutations: updateEntry', () => {

      const store = createVuexStore(daybookState)

      const updateEntry = {  
        id: "-NCQxg1azqf38K2LGQrB",
        date: "Fri Sep 27 2022",
        text: "test de updateEntry"
      }

      store.commit('daybook/updateEntries', updateEntry)

      const storeEntries = store.state.daybook.entries
      expect(storeEntries.length).toBe(2)
      expect(storeEntries.find( value => value.id === updateEntry.id)).toEqual(updateEntry)

    })

    it('mutations: addEntries', () =>{

      const store = createVuexStore({ isLoading: false, entries: [] })

      store.commit('daybook/addEntries', { id:'-NCdaSzsAqf322LGgrB', text:'hola mundo' })

      const storeEntries = store.state.daybook.entries

      expect(storeEntries.length).toBe(1)
      expect(storeEntries.find(val => val.id === '-NCdaSzsAqf322LGgrB')).toBeTruthy()

      store.commit('daybook/deleteEntries', { id:'-NCdaSzsAqf322LGgrB', text:'hola mundo' })

      expect(store.state.daybook.entries.length).toBe(0)
      expect(store.state.daybook.entries.find(val => val.id === '-NCdaSzsAqf322LGgrB')).toBeFalsy()



    })

    //  getters

    it('getters getEntriesByTerm y getEntriesById', () => {

      const store = createVuexStore( daybookState )
      const [ entry1, entry2] = daybookState.entries

      expect(store.getters['daybook/getEntriesByTerm']('axios').length).toBe(1)
      expect(store.getters['daybook/getEntriesByTerm']('axios')).toEqual([ entry2 ])
      
      expect(store.getters['daybook/getEntriesById']('-NCRaG5i3YimOervMM84'))
      .toEqual({
        id: "-NCRaG5i3YimOervMM84",
        date: "Tue Sep 20 2022",
        text: "y también axios"
      })


    })

    // actions 

    

    it('action: createEntries', async() => {
      const store = createVuexStore({ isLoading: false, entries:[] })
      
      const createEntry = {
        id: "-NCRaG5i3YimOervMM84",
        date: "Tue Sep 20 2022",
        text: "y también axios x3"
      }

      const res = await store.dispatch('daybook/createEntries', createEntry)

      expect(res).toStrictEqual(expect.any( String ))
      expect(store.state.daybook.entries.length).toBe(1)
    })


    it('action: updateEntries', async () => {
      
      const store = createVuexStore( daybookState )

      const updateEntry = {
        id: "-NCRaG5i3YimOervMM84",
        date: "Tue Sep 20 2022",
        text: "y también axios x2"
      }
      await store.dispatch('daybook/updateEntries', updateEntry)

      expect(daybookState.entries.find(val => val.id === updateEntry.id)).toEqual(updateEntry)

    })

    it('action: deletEntries', async() => {

      const store = createVuexStore(daybookState)
      
      await store.dispatch('daybook/deleteEntry', 
      {
        id: "-NCRaG5i3YimOervMM84",
        date: "Tue Sep 20 2022",
        text: "y también axios x2"
      }
      )

      expect(store.state.daybook.entries.find(val => val.id === '-NCRaG5i3YimOervMM84'))
        .toBeFalsy()


    })


    it('action: loadEntries', async() => {

      const store = createVuexStore({ isLoading: false, entries:[] })

      await store.dispatch('daybook/loadEntries')

      expect(store.state.daybook.entries).toStrictEqual(expect.any( Array ))
      expect( store.state.daybook.entries ).not.toBeFalsy()

    })
  })