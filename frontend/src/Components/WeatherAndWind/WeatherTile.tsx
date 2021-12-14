import React from "react";

const WeatherTile = () => {
  return (
    <div className="weather-tile">
      <img src="" alt="img" className="weather-tile--img" />
      <h4 className="weather-tile--h4">Windy</h4>
      <div className="weather-tile__wind">
        <img src="" alt="" />
        <span>2m/s</span>
      </div>
      <div className="weather-tile__wind">
        <img src="" alt="" className="weather-tile__wind--img" />
        <span>NE</span>
      </div>
      <h4 className="weather-tile--h4">0:00 </h4>
    </div>
  );
};

export default WeatherTile;
