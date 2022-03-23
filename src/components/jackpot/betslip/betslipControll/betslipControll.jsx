import PropTypes from "prop-types";
import BetslipButton from "../betslipButton/betslipButton";
import "./betslipControll.css";

function BetslipControll({ dispatch, pageData }) {
  function getChackType(type) {
    dispatch({
      type: type,
      params: pageData,
    });
  }

  return (
    <div className="betslip-controll">
      <BetslipButton
        buttunFunc={getChackType}
        text="Favorites"
        type="favorites"
      />
      <BetslipButton
        buttunFunc={getChackType}
        text="Quick Pick"
        type="quickPick"
      />
      <select className="betslip-select">
        <option value="">1 line</option>
        <option value="">2 line</option>
        <option value="">3 line</option>
        <option value="">4 line</option>
        <option value="">5 line</option>
        <option value="">6 line</option>
      </select>
    </div>
  );
}

BetslipControll.propTypes = {
  dispatch: PropTypes.func,
  pageData: PropTypes.array,
};

BetslipControll.defaultProps = {
  dispatch: function () {},
  pageData: [],
};

export default BetslipControll;
