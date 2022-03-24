import PropTypes from "prop-types";
import { memo } from "react";
import "./betslipPanel.css";

function BetslipPanel({ pageData, gameInSlip }) {

  return (
    <div className="betslip-panel">
      <div className="betslip-count">Jackpot bet ({Object.keys(gameInSlip).length})</div>

      <div className="betslip-info">
        <div className="betslip-info_inner">
          <div className="betslip-combinations">
            <span>Combinations:</span>
            <span>1</span>
          </div>
          <div className="betslip-total_price">
            <span>Total Price:</span>
            <span>100</span>
          </div>
        </div>
      </div>
    </div>
  );
}

BetslipPanel.propTypes = {
  pageData: PropTypes.array,
  gameInSlip: PropTypes.object,
};

BetslipPanel.defaultProps = {
  pageData: [],
  gameInSlip: {},
};

export default memo(BetslipPanel);
