import PropTypes from "prop-types";
import "./item.css";
import PriceButton from "../../price-button/priceButton";
import reducerDispatch from "../../../reducerDispatch";

function Item({ info, gameInSlip, dispatch }) {
  function setDispatch(params) {
    reducerDispatch(params, gameInSlip, info, dispatch);
  }

  return (
    <div className="item">
      <div className="item-colums item-info">
        <div className="item-index">{info.id}</div>
        <div className="item-text">
          <div className="item-teams">{info.teams}</div>
          <div className="item-league">{info.league}</div>
        </div>
      </div>
      <div className="item-colums item-date">
        <div className="game-date">{info.date}</div>
        <div className="game-hour">{info.hour}</div>
      </div>
      <div className="item-colums item-prices">
        {info.prices.map((el, i) => {
          return (
            <PriceButton
              active={
                gameInSlip[info.id] && gameInSlip[info.id].includes(el.name)
                  ? true
                  : false
              }
              info={el}
              key={i}
              setDispatch={setDispatch}
            />
          );
        })}
      </div>
    </div>
  );
}

Item.propTypes = {
  info: PropTypes.object,
  gameInSlip: PropTypes.object,
  dispatch: PropTypes.func,
};

Item.defaultProps = {
  info: {
    id: null,
    teams: "",
    league: "",
    date: "",
    hour: "",
    prices: [],
  },
  gameInSlip: {},
  dispatch: function () {},
};

export default Item;
