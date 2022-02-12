import { useState, useEffect } from "react";
import {WeatherIF, RainFallIF, WeatherAndWindIF, TemperatureAndHumidityIF} from "../Helper/Interfaces"
import AirQuality from "./Cards/AirQuality";
import Events from "./Cards/Events";
import Rainfall from "./Cards/Rainfall";
import SunriseAndMoonrise from "./Cards/SunriseAndMoonrise";
import TemperatureAndHumidity from "./Cards/TemperatureAndHumidity";
import WeatherAndWind from "./Cards/WeatherAndWind";

interface Props {
  weather: WeatherIF 
  city: string
  day: string;
}

const WeatherBoard = (props: Props) => {
  const [rainfall, setRainfall] = useState([{
    rainfall: 0,
    hour: 0
  }])
  const [weatherAndWind, setWeatherAndWind] = useState([{
    weather: "",
    windStrength: 0,
    windDirection: "",
    hour: 0
  }])
  const [temperatureAndHumidity, setTemperatureAndHumidity] = useState([{
    temperature: 0,
    humidity: 0,
    hour: 0
  }])

  const createData = () => {
    let rainfallArray:Array<RainFallIF> = []
    let weatherAndWindArray:Array<WeatherAndWindIF> = []
    let temperatureAndHumidityArray:Array<TemperatureAndHumidityIF> = []

    for(let i:number = 0 ; i< props.weather.data.length; i++){

      let rainfallObject:RainFallIF = {
        rainfall: props.weather.data[i].rainFall,
        hour: props.weather.data[i].hour
      }

      let weatherAndWindObject:WeatherAndWindIF = {
        weather: props.weather.data[i].weather,
        windStrength: props.weather.data[i].windStrength,
        windDirection: props.weather.data[i].windDirection,
        hour: props.weather.data[i].hour
      }

      let temperatureAndHumidityObject:TemperatureAndHumidityIF = {
        temperature: props.weather.data[i].temperature,
        humidity: props.weather.data[i].humidity,
        hour: props.weather.data[i].hour
      }

      rainfallArray.push(rainfallObject)
      weatherAndWindArray.push(weatherAndWindObject)
      temperatureAndHumidityArray.push(temperatureAndHumidityObject)
    }

    setRainfall(rainfallArray)
    setWeatherAndWind(weatherAndWindArray)
    setTemperatureAndHumidity(temperatureAndHumidityArray)
  }

  useEffect(() => {
    if(props.weather.data !== undefined){
      createData()
    }
  }, [props.weather.data])

  return (
    <div className="dashboard">
      <div className="topbar">{props.city}, {props.day}</div>
      <AirQuality airQualityValues={props.weather.airQuality} airQualityStatusValues={props.weather.airQualityStatus}/>
      <Rainfall rainfallValues={rainfall}/>
      <WeatherAndWind weatherAndWindValues={weatherAndWind}/>
      <SunriseAndMoonrise sunrise={props.weather.sunRise} moonrise={props.weather.moonRise}/>
      <Events eventsValues={props.weather.events}/>
      <TemperatureAndHumidity temperatureAndHumidityValues={temperatureAndHumidity}/>
    </div>
  );
};

export default WeatherBoard;
