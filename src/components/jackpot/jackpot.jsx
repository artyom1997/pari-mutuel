import PropTypes from "prop-types";
import Item from "./item/item";
import "./jackpot.css";

function Jackpot({ data }) {
  return (
    <div className="jackpot-list">
      {data.map((el) => {
        return <Item info={el} key={el.id} />;
      })}
    </div>
  );
}

Jackpot.propTypes = {
  data: PropTypes.array,
};

Jackpot.defaultProps = {
  data: [],
};

export default Jackpot;
