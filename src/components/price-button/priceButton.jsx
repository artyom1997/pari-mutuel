import PropTypes from "prop-types";
import "./priceButton.css";

function PriceButton({info}) {
  return (
    <div className="item-price">
      <button className="item-button">
          <div>{info.name}</div>
          <div>{info.rate}</div>
      </button>
    </div>
  );
}

PriceButton.propTypes = {
  info: PropTypes.object,
};

PriceButton.defaultProps = {
  info: {
    name:'',
    rate:''
  },
};

export default PriceButton;
