import React from "react";
import { useState, useReducer } from "react";
import "./main.css";
import MainTab from "../main-tab/main-tab";
import Jackpot from "../jackpot/jackpot";
import Results from "../results/results";
import Betslip from "../jackpot/betslip/betslip";
import reducer from "../../reducer";

function Main() {
  const [gameInSlip, dispatch] = useReducer(reducer, {});
  const [activeTab, setActiveTab] = useState("jackpot");

  const pageData = require("../../files/Json/games.json");

  return (
    <div className="main">
      <MainTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-inner">
        {activeTab === "jackpot" ? (
          <Jackpot
            data={pageData}
            gameInSlip={gameInSlip}
            dispatch={dispatch}
          />
        ) : activeTab === "results" ? (
          <Results />
        ) : null}
        <Betslip gameInSlip={gameInSlip} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default React.memo(Main);
