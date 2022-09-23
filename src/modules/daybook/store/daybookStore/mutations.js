
// export const myMutation = ( satate ) =>{

// }

export const setEntries = ( state, entry ) =>{
  if( state.entries.length === 0 ) state.entries = [ ...state.entries , ...entry  ]

  state.isLoading = false
}
export const updateEntries = ( state , entry ) =>{

 const index = state.entries.map( val => val.id ).indexOf( entry.id )
 state.entries[index] = entry
 
}
export const addEntries = ( state , entry ) => {

  state.entries.unshift( entry )

}
export const deleteEntries = ( state, entry ) =>{

  const newEntries = state.entries.filter( val => val.id !== entry.id )
  state.entries = [...newEntries]
}
