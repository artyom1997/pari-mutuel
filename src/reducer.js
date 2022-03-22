export default function reducer(state, action) {
    if(action.type === 'addGame'){
        state[action.gameId] = [action.params.name]
    }
    if(action.type === 'addPrice'){
        console.log(state)

        state[action.gameId] = [...state[action.gameId],action.params.name]
        // state[action.gameId].push(action.params.name)
    }

    if(action.type === 'deleteGame'){
        delete state[action.gameId]
    }

    if(action.type === 'deletePrice'){
        state[action.gameId] = state[action.gameId].filter(el => el !== action.params.name)
    }

    state = {...state}
  
  return state

}
