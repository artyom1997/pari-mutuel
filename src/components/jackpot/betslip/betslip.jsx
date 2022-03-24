import { memo } from "react";
import PropTypes from "prop-types";
import "./betslip.css";
import BetslipControll from "./betslipControll/betslipControll";
import BetslipFooter from "./betslipFooter/betslipFooter";
import BetslipPanel from "./betslipPanel/betslipPanel";

function Betslip({ dispatch, pageData, gameInSlip }) {
  return (
    <div className="betslip">
      <div className="betslip-header">
        <div className="betslip-title">Betslip</div>
        <BetslipControll dispatch={dispatch} pageData={pageData} />
      </div>
      <BetslipPanel pageData={pageData} gameInSlip={gameInSlip} />
      <BetslipFooter dispatch={dispatch} />
    </div>
  );
}

Betslip.propTypes = {
  dispatch: PropTypes.func,
  pageData: PropTypes.array,
  gameInSlip: PropTypes.object,
};

Betslip.defaultProps = {
  dispatch: function () {},
  pageData: [],
  gameInSlip: {},
};

export default memo(Betslip);
