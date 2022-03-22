import React from "react";
import "./betslip.css";
import BetslipControll from "./betslipControll/betslipControll";
import BetslipFooter from "./betslipFooter/betslipFooter";
import BetslipPanel from "./betslipPanel/betslipPanel";

function Betslip() {
  return (
    <div className="betslip">
      <div className="betslip-header">
        <div className="betslip-title">Betslip</div>
        <BetslipControll />
      </div>
      <BetslipPanel />
      <BetslipFooter />
    </div>
  );
}

export default React.memo(Betslip);
