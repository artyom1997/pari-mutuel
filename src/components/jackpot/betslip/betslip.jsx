import React from "react";
import PropTypes from "prop-types";
import "./betslip.css";
import BetslipControll from "./betslipControll/betslipControll";
import BetslipFooter from "./betslipFooter/betslipFooter";
import BetslipPanel from "./betslipPanel/betslipPanel";

function Betslip({ dispatch, pageData }) {
  return (
    <div className="betslip">
      <div className="betslip-header">
        <div className="betslip-title">Betslip</div>
        <BetslipControll dispatch={dispatch} pageData={pageData} />
      </div>
      <BetslipPanel />
      <BetslipFooter />
    </div>
  );
}

Betslip.propTypes = {
  dispatch: PropTypes.func,
  pageData: PropTypes.array,
};

Betslip.defaultProps = {
  dispatch: function () {},
  pageData: [],
};

export default React.memo(Betslip);
