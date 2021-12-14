import Header from "../Header";
import "./style.css";
import SunriseInfo from "./SunriseInfo";

const SunriseCard = () => {
  return (
    <div className="sunrise-card">
      <Header title="Sunrise & Moonrise" />
      <SunriseInfo/>
      <SunriseInfo/>
    </div>
  );
};

export default SunriseCard;
