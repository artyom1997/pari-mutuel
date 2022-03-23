export default function reducerDispatch(params, gameInSlip, info, dispatch) {
  let type = "";
  if (!gameInSlip[info.id]) {
    type = "addGame";
  }

  if (gameInSlip[info.id] && !gameInSlip[info.id].includes(params.name)) {
    if (gameInSlip[info.id].length >= 2) return;
    type = "addPrice";
  }
  if (gameInSlip[info.id] && gameInSlip[info.id].includes(params.name)) {
    if (gameInSlip[info.id].length === 1) {
      type = "deleteGame";
    }
    if (gameInSlip[info.id].length > 1) {
      type = "deletePrice";
    }
  }

  dispatch({
    type: type,
    gameId: info.id,
    params,
  });
}
