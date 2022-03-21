import React from "react";
import "./betslip.css";
import BetslipControll from "./betslipControll/betslipControll";


function Betslip() {
  return (
    <div className="betslip">
      <div className="betslip-header">
        <div className="betslip-title">
            Betslip
        </div>
        <BetslipControll />
      </div>
    </div>
  );
}

export default React.memo(Betslip);
