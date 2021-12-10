import Header from "../Header";
import AirQualityTags from "./AirQualityTags";
import AirStatus from "./AirStatus";
import './style.css'

const AirQualityCard = () => {
  return (
    <div className="card">
      <Header title="Air Quality"/>
      <AirStatus />
      <AirQualityTags/>
    </div>
  );
};

export default AirQualityCard
