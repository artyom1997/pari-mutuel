import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/banner";
import MainTab from "./components/main-tab/main-tab";
import PopUp from "./components/popup/popup";

function App() {
  const bannerConf = {
    imgPath: require("./files/images/banner.jpg"),
    text: 1003194,
    currency: "$",
  };

  const popupInfo = require("./files/Json/info.json");
 
  const [popup,setPopup] = useState(false)
 
  return (
    <div className="App">
      <Banner bannerConf={bannerConf} setPopup={setPopup} />
      <MainTab />
     { popup ?  <PopUp setPopup={setPopup} info={popupInfo} /> : null} 
    </div>
  );
}

export default App;
