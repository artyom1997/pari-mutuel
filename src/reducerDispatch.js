 export default function reducerDispatch(params, gameInSlip,info,dispatch) {
  if (!gameInSlip[info.id]) {
    dispatch({
      type: "addGame",
      gameId: info.id,
      params,
    });
    return;
  }

  if (gameInSlip[info.id] && !gameInSlip[info.id].includes(params.name)) {
    if (gameInSlip[info.id].length < 2) {
      dispatch({
        type: "addPrice",
        gameId: info.id,
        params,
      });
    }

    return;
  }
  if (gameInSlip[info.id] && gameInSlip[info.id].includes(params.name)) {
    if (gameInSlip[info.id].length === 1) {
      dispatch({
        type: "deleteGame",
        gameId: info.id,
      });
      return;
    }
    if (gameInSlip[info.id].length > 1) {
      dispatch({
        type: "deletePrice",
        gameId: info.id,
        params,
      });
      return;
    }
  }
}
