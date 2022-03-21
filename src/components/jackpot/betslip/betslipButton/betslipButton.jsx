import React from "react";
import "./betslipButton.css";
import PropTypes from 'prop-types'



function BetslipButton({ text, buttunFunc }) {
  return <button className="betslip-button" onClick={buttunFunc}>{text}</button>;
}

BetslipButton.propTypes = {
  text: PropTypes.string,
  buttunFunc: PropTypes.func,
};

BetslipButton.defaultProps = {
    text:'',
    buttunFunc:function() {
    }
}

export default BetslipButton;
