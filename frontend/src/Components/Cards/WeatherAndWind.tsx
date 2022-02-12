import Card from "./Card";
import WeatherAndWindInfo from "./WeatherAndWindInfo";
import {WeatherAndWindIF} from "../../Helper/Interfaces"

interface Props {
  weatherAndWindValues:Array<WeatherAndWindIF>
}

const WeatherAndWind = (props: Props) => {
  if (props.weatherAndWindValues === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <Card title="Weather and wind" className="weather-wind-card">
      <div className="weather-wind-info">
        {
          props.weatherAndWindValues.map((value) => <WeatherAndWindInfo key={`${value.hour}.${value.weather}`} hour={value.hour} windStrength={value.windStrength} windDirection={value.windDirection} weather={value.weather}/>)
        }
      </div>
    </Card>
  );
};

export default WeatherAndWind;