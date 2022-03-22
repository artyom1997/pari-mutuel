import BetslipButton from "../betslipButton/betslipButton";
import "./betslipFooter.css";

function BetslipFooter() {
  return (
    <div className="betslip-footer">
      <BetslipButton text="Clear" />
      <div className="betslip-bet">
        <BetslipButton text="Place Bet (6 from 17)" />
      </div>
    </div>
  );
}

export default BetslipFooter;
