import "./main-tab.css";

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

export default MainTab;
