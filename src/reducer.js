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
    case "favorites":
      for (let i = 0; i < action.params.length; i++) {
        let minPrice = {
          name: action.params[i].prices[0].name,
          rate: action.params[i].prices[0].rate,
        };
        for (let j = 0; j < action.params[i].prices.length; j++) {
          if (minPrice.rate > action.params[i].prices[j].rate) {
            minPrice = { ...action.params[i].prices[j] };
          }
        }
        newState[action.params[i].id] = [minPrice.name];
      }
      break;
    case "quickPick":
      for (let i = 0; i < action.params.length; i++) {
        newState[action.params[i].id] = [
          action.params[i].prices[Math.floor(Math.random() * 3)].name,
        ];
      }
      break;
    case "clear":
      return newState;

    default:
      newState = { ...state };
      break;
  }
  return newState;
}
