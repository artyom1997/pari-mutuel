import BetslipButton from "../betslipButton/betslipButton";
import "./betslipControll.css";

function BetslipControll() {
  return (
    <div className="betslip-controll">
      <BetslipButton text="Favorites"  />
      <BetslipButton text="Quick Pick" />
      <select className="betslip-select">
        <option value="">1 line</option>
        <option value="">2 line</option>
        <option value="">3 line</option>
        <option value="">4 line</option>
        <option value="">5 line</option>
        <option value="">6 line</option>
      </select>
    </div>
  );
}

export default BetslipControll;
