import React from 'react'
import Header from '../Header'
import Status from '../Status'
import WeatherTile from '../WeatherTile'

const WeatherAndWind = () => {
    return (
        <div className="weather-and-wind-card card">
        <Header title="Weather & Wind"/>
        <Status img="" header="Sunny" text="Perfect weather for a walk"/>
        <div className="tiles">
           <WeatherTile/>
        </div>
      </div>
    )
}

export default WeatherAndWind