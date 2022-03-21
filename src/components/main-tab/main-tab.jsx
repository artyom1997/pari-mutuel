import "./main-tab.css";
import PropTypes from "prop-types";
import React from "react";


function MainTab({ activeTab, setActiveTab }) {
  const tabConf = [
    { value: "jackpot", title: "Jackpot" },
    { value: "tickets", title: "My Tickets" },
    { value: "results", title: "Results" },
  ];

  return (
    <div className="main-tabs">
      {tabConf.map((el, i) => {
        return (
          <div
            onClick={() => {
              setActiveTab(el.value)
            }}
            className={`tab ${el.value === activeTab ? "active" : ""}`}
            key={i}
          >
            {el.title}
          </div>
        );
      })}
    </div>
  );
}

MainTab.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};

MainTab.defaultProps = {
  activeTab: '',
  setActiveTab: function () {},
};


export default React.memo(MainTab) ;
