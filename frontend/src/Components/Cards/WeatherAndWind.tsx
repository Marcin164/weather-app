import React from "react";
import Card from "../Card";
import WeatherAndWindInfo from "./WeatherAndWindInfo";

interface Props {}

const WeatherAndWind = (props: Props) => {
  return (
    <Card title="Weather and wind" className="weather-wind-card">
      <div className="weather-wind-info">
        <WeatherAndWindInfo/>
      </div>
    </Card>
  );
};

export default WeatherAndWind;