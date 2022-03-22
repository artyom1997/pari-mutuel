import "./betslipPanel.css";

function BetslipPanel() {
  return (
    <div className="betslip-panel">
      <div className="betslip-count">Jackpot bet (0)</div>

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

export default BetslipPanel;
