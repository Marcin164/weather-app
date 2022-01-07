import React from "react";

interface Props {}

const SunriseAndMoonriseInfo = (props: Props) => {
  return (
    <div className="sunrise-moonrise-wrapper">
      <div className="sunrise-moonrise-wrapper-header">Sunrise</div>
      <div className="sunrise-moonrise-wrapper-info">
        <img src="" alt="" className="sunrise-moonrise-wrapper-info-image" />
        <div className="sunrise-moonrise-wrapper-info-hour">
          <span>6:38</span>
        </div>
      </div>
    </div>
  );
};

export default SunriseAndMoonriseInfo;
