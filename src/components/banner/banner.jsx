import "./banner.css";
function Banner({ bannerConf,setPopup }) {
  return (
    <div className="banner">
      <img className="banner-img" src={bannerConf.imgPath} alt="" />
      <div className="banner-text">
        {bannerConf.text.toString().replace(/(.)(?=(.{3})+$)/g, "$1,")}{" "}
        <span className="banner-currency">{bannerConf.currency}</span>
      </div>
      <button className="banner-info" onClick={() => {
          setPopup(true)
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.09 22.09"
        >
          <path
            d="M11,8.26a1.71,1.71,0,0,0-1.69,1.79v6.07a1.69,1.69,0,1,0,3.37,0V10.05A1.7,1.7,0,0,0,11,8.26Z"
            fill="rgb(var(--ligth-green))"
          />
          <path
            d="M11,3.62a1.85,1.85,0,1,0,1.85,1.84A1.84,1.84,0,0,0,11,3.62Z"
            fill="rgb(var(--ligth-green))"
          />
          <path
            d="M11,0A11,11,0,1,0,22.09,11,11,11,0,0,0,11,0Zm0,19.68A8.64,8.64,0,1,1,19.68,11,8.64,8.64,0,0,1,11,19.68Z"
            fill="rgb(var(--ligth-green))"
          />
        </svg>
      </button>
    </div>
  );
}

export default Banner;
