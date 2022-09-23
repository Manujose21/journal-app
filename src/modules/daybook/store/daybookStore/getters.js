
// export const myGetter = ( state ) => {
//   return state
// }

export const getEntriesByTerm = ( state )=> (term = "") => {

  if(term === "") state.entries

  return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLowerCase()))
}

export const getEntriesById = ( state) => ( id = "" ) => {
  
  const entry = state.entries.find( entry => entry.id === id)

  if(!entry) return

  return {...entry}
}