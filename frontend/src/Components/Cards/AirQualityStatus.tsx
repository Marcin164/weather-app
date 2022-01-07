import React from "react";

interface Props {}

const AirQualityStatus = (props: Props) => {
  return (
    <div className="status">
      <div className="status-header">
        <span>Good</span>
      </div>
      <div className="status-info">
        <span>Get deep breath...</span>
      </div>
    </div>
  );
};

export default AirQualityStatus;
