import React from 'react'

interface Props {
    hour:number
    windStrength:number
    windDirection:string
    weather:string
}

const WeatherAndWindInfo = (props: Props) => {
    return (
        <div className="weather-wind-wrapper">
          <img src={`/images/${props.weather}.svg`} alt="" className="weather-wind-wrapper-image" />
          <img src={`/images/${props.windDirection}.svg`} alt="" className="weather-wind-wrapper-icon"/>
          <div className="weather-wind-wrapper-info">{props.windStrength}m/s</div>
          <div className="weather-wind-wrapper-hour">{props.hour}:00</div>
        </div>
    )
}

export default WeatherAndWindInfo
