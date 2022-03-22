import PropTypes from "prop-types";
import "./priceButton.css";

function PriceButton({ info, setDispatch, active }) {
  return (
    <div className="item-price">
      <button
        className={`item-button ${active ? 'active' : ''}`}
        onClick={() => {
          setDispatch(info);
        }}
      >
        <div>{info.name}</div>
        <div>{info.rate}</div>
      </button>
    </div>
  );
}

PriceButton.propTypes = {
  info: PropTypes.object,
  setDispatch: PropTypes.func,
  active: PropTypes.bool,
};

PriceButton.defaultProps = {
  info: {
    name: "",
    rate: "",
    active: false,
  },
  setDispatch: function () {},
};

export default PriceButton;
