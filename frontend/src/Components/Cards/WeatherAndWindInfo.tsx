import React from 'react'

interface Props {
    
}

const WeatherAndWindInfo = (props: Props) => {
    return (
        <div className="weather-wind-wrapper">
          <img src="" alt="" className="weather-wind-wrapper-image" />
          <img src="" alt="" className="weather-wind-wrapper-icon"/>
          <div className="weather-wind-wrapper-info">10m/s</div>
          <div className="weather-wind-wrapper-hour">9:00</div>
        </div>
    )
}

export default WeatherAndWindInfo
