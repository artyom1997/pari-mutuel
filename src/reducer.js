export default function reducer(state, action) {
  let newState = {};
  switch (action.type) {
    case "addGame":
      newState = { ...state, [action.gameId]: [action.params.name] };
      break;
    case "addPrice":
      newState = {
        ...state,
        [action.gameId]: [...state[action.gameId], action.params.name],
      };
      break;
    case "deletePrice":
      newState = {
        ...state,
        [action.gameId]: state[action.gameId].filter(
          (el) => el !== action.params.name
        ),
      };
      break;
    case "deleteGame":
      newState = { ...state };
      delete newState[action.gameId];
      break;
    default:
        newState = {...state}
      break;
  }
  return newState;
}
