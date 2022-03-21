import "./App.css";
import { useMemo, useState } from "react";
import Banner from "./components/banner/banner";
import PopUp from "./components/popup/popup";
import Main from "./components/main/main";

function App() {
  const [popup, setPopup] = useState(false);

  const bannerConf = useMemo(() => {
    return {
      imgPath: require("./files/images/banner.jpg"),
      text: 1003194,
      currency: "$",
    };
  }, []);

  const popupInfo = require("./files/Json/info.json");

  return (
    <div className="App">
      <Banner bannerConf={bannerConf} setPopup={setPopup} />
      <Main />
      {popup ? <PopUp setPopup={setPopup} info={popupInfo} /> : null}
    </div>
  );
}

export default App;
