
// export const myActions = async ({ commit }) =>{

// }

import journalApi from "@/api/journalApi"

export const loadEntries = async ( { commit } ) =>{

  const { data } =  await journalApi.get('/entries.json')
  
  let entries = []

  for(let id of Object.keys( data ) ){
    entries.push({
      id,
      ...data[id]
    })

  } 
  commit("setEntries", entries)

}

export const updateEntries = async ( {commit} , entry) =>{

  const { id, date, text } = entry
  const dataSave = { date , text }
  const { data } = await journalApi.put(`/entries/${id}.json`, dataSave)
  data.id = id
  commit("updateEntries", {...data})

}

export const createEntries = async ( { commit }, entry) =>{
  
  const { date, text } = entry
  const { data } = await  journalApi.post('/entries.json', { date, text })
  entry.id = data.name
  commit("addEntries", {...entry})
  return data.name
}

export const deleteEntry = async ({ commit }, entry) =>{

  await journalApi.delete(`/entries/${entry.id}.json`)
 
  commit('deleteEntries', {...entry})
}