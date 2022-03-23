import React from "react";
import "./betslipButton.css";
import PropTypes from "prop-types";

function BetslipButton({ text, buttunFunc, type }) {
  return (
    <button
      className="betslip-button"
      onClick={() => {
        buttunFunc(type);
      }}
    >
      {text}
    </button>
  );
}

BetslipButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  buttunFunc: PropTypes.func,
};

BetslipButton.defaultProps = {
  type: "",
  text: "",
  buttunFunc: function () {},
};

export default BetslipButton;
