import React, { useState } from "react";
import Card from "../Card";
import AirQualityInfo from "./AirQualityInfo";
import AirQualityStatus from "./AirQualityStatus";

interface Props {
  airQualityValues: any;
}

const AirQuality = (props: Props) => {
  if (props.airQualityValues !== undefined) {
    return (
      <Card title="Air Quality" className="air-quality-card">
        <AirQualityStatus />
        <div className="air-quality-info">
          {props.airQualityValues.map((airQualityvalue: any) => (
            <AirQualityInfo
              value={airQualityvalue.value}
              tag={airQualityvalue.tag}
            />
          ))}
        </div>
      </Card>
    );
  }else{
    return <h1>Loading...</h1>;
  }
};

export default AirQuality;
