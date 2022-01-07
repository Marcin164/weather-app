import React from "react";

interface Props {}

const AirQualityInfo = (props: Props) => {
  return (
    <div className="air-quality-info-wrapper">
      <div className="air-quality-info-wrapper-value">
        <span>8.6</span>
      </div>
      <div className="air-quality-info-wrapper-name">
        <span>PM2.5</span>
      </div>
    </div>
  );
};

export default AirQualityInfo;
