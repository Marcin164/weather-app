import { AirQualityIF, AirQualityStatusIF } from "../../Helper/Interfaces";
import Card from "./Card";
import AirQualityInfo from "./AirQualityInfo";
import AirQualityStatus from "./AirQualityStatus";

interface Props {
  airQualityValues: Array<AirQualityIF>;
  airQualityStatusValues: AirQualityStatusIF
}

const AirQuality = (props: Props) => {
  if (props.airQualityValues === undefined) {
    return <h1>Loading...</h1>;
  }
    return (
      <Card title="Air Quality" className="air-quality-card">
        <AirQualityStatus title={props.airQualityStatusValues.title} subTitle={props.airQualityStatusValues.subTitle}/>
        <div className="air-quality-info">
          {props.airQualityValues.map((airQualityValue: AirQualityIF) => (
            <AirQualityInfo
              key={airQualityValue.tag}
              value={airQualityValue.value}
              tag={airQualityValue.tag}
            />
          ))}
        </div>
      </Card>
    );
};

export default AirQuality;
