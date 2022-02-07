import { useState, useEffect } from "react";
import AirQuality from "./Cards/AirQuality";
import Events from "./Cards/Events";
import Rainfall from "./Cards/Rainfall";
import SunriseAndMoonrise from "./Cards/SunriseAndMoonrise";
import TemperatureAndHumidity from "./Cards/TemperatureAndHumidity";
import WeatherAndWind from "./Cards/WeatherAndWind";

interface Props {
  weather: any;
  city: string
  day: string;
}

const WeatherBoard = (props: Props) => {
  const [rainfall, setRainfall] = useState([{}])
  const [weatherAndWind, setWeatherAndWind] = useState([{}])
  const [temperatureAndHumidity, setTemperatureAndHumidity] = useState([{}])

  const createData = () => {
    let rainfallArray:Array<Object> = []
    let weatherAndWindArray:Array<Object> = []
    let temperatureAndHumidityArray:Array<Object> = []

    for(let i:number = 0 ; i< props.weather.data.length; i++){

      let rainfallObject:Object = {
        rainfall: props.weather.data[i].rainFall,
        hour: props.weather.data[i].hour
      }

      let weatherAndWindObject:Object = {
        weather: props.weather.data[i].weather,
        windStrength: props.weather.data[i].windStrength,
        windDirection: props.weather.data[i].windDirection,
        hour: props.weather.data[i].hour
      }

      let temperatureAndHumidityObject:Object = {
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
    return function cleanup() {
      setRainfall([])
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
