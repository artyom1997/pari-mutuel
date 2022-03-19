import "./App.css";
import Banner from "./components/banner/banner";
import MainTab from "./components/main-tab/main-tab";

function App() {
  const bannerConf = {
    imgPath:require("./files/images/banner.jpg"),
    text: 1003194,
    currency:'$'
  }
  return (
    <div className="App">
      <Banner bannerConf={bannerConf} />
      <MainTab />
    </div>
  );
}

export default App;
