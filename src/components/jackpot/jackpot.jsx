import PropTypes from "prop-types";
import Item from "./item/item";
import "./jackpot.css";

function Jackpot({ data, gameInSlip, dispatch }) {
  return (
    <div className="jackpot-list">
      {data.map((el) => {
        return <Item info={el} key={el.id} gameInSlip={gameInSlip} dispatch={dispatch} />;
      })}
    </div>
  );
}

Jackpot.propTypes = {
  data: PropTypes.array,
  gameInSlip: PropTypes.object,
  dispatch: PropTypes.func,
};

Jackpot.defaultProps = {
  data: [],
  gameInSlip: {},
  dispatch: function () {},
};

export default Jackpot;
