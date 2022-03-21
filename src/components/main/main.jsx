import React from "react";
import { useState } from "react";
import "./main.css";
import MainTab from "../main-tab/main-tab";
import Jackpot from "../jackpot/jackpot";
import Results from "../results/results";
import Betslip from "../jackpot/betslip/betslip";

function Main() {
  const [activeTab, setActiveTab] = useState("jackpot");

  const pageData = require("../../files/Json/games.json");

  return (
    <div className="main">
      <MainTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-inner">
      {activeTab === "jackpot" ? (
        <Jackpot className="jackpot" data={pageData} />
      ) : activeTab === "results" ? (
        <Results />
      ) : null}
      <Betslip />

      </div>
      
    </div>
  );
}

export default React.memo(Main);
