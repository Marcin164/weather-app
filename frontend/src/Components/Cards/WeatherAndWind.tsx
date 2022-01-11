import React from "react";
import Card from "../Card";
import WeatherAndWindInfo from "./WeatherAndWindInfo";

interface Props {
  weatherAndWindValues:Array<any>
}

const WeatherAndWind = (props: Props) => {
  return (
    <Card title="Weather and wind" className="weather-wind-card">
      <div className="weather-wind-info">
        {
          props.weatherAndWindValues.map((value) => <WeatherAndWindInfo hour={value.hour} windStrength={value.windStrength} windDirection={value.windDirection} weather={value.weather}/>)
        }
        
      </div>
    </Card>
  );
};

export default WeatherAndWind;