import PropTypes from "prop-types";
import "./item.css";
import PriceButton from "../../price-button/priceButton";

function Item({ info }) {
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
          return <PriceButton className="price-button" info={el} key={i} />;
        })}
      </div>
    </div>
  );
}

Item.propTypes = {
  info: PropTypes.object,
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
};

export default Item;
