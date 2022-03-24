import { memo } from "react";
import PropTypes from "prop-types";
import BetslipButton from "../betslipButton/betslipButton";
import "./betslipFooter.css";

function BetslipFooter({ dispatch }) {
  function clearGameInSlip(type) {
    dispatch({
      type:type
    })
  }

  return (
    <div className="betslip-footer">
      <BetslipButton text="Clear" buttunFunc={clearGameInSlip} type="clear" />
      <div className="betslip-bet">
        <BetslipButton text="Place Bet (6 from 17)" />
      </div>
    </div>
  );
}

BetslipFooter.propTypes = {
  dispatch: PropTypes.func,
};
BetslipFooter.defaultProps = {
  dispatch: function () {},
};

export default memo(BetslipFooter);
