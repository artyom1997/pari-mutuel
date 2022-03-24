import PropTypes from "prop-types";
import { memo } from "react";
import "./betslipPanel.css";

function BetslipPanel({ gameInSlip }) {
  let combinations = Object.values(gameInSlip).filter(el => el.length > 1).length + 1
  let totalPrice = 100 * combinations


  return (
    <div className="betslip-panel">
      <div className="betslip-count">Jackpot bet ({Object.keys(gameInSlip).length})</div>

      <div className="betslip-info">
        <div className="betslip-info_inner">
          <div className="betslip-combinations">
            <span>Combinations:</span>
            <span>{combinations}</span>
          </div>
          <div className="betslip-total_price">
            <span>Total Price:</span>
            <span>{totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

BetslipPanel.propTypes = {
  gameInSlip: PropTypes.object,
};

BetslipPanel.defaultProps = {
  gameInSlip: {},
};

export default memo(BetslipPanel);
