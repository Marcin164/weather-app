import React from "react";
import Header from '../Header'
import AirQualityTile from "../AirQualityTile";
import Status from "../Status";

const AirQuality = () => {
  return (
    <div className="air-quality-card card">
      <Header title="Air Quality" />
      <Status img="" header="Good" text="Take a deep breath..."/>
      <div className="tiles">
        <AirQualityTile name="PM2.5" value={5}/>
      </div>
    </div>
  );
};

export default AirQuality;
