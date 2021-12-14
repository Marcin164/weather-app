import React from 'react'
import Header from "../Header";
import WeatherStatus from './WeatherStatus';
import './style.css'
import WeatherTiles from './WeatherTiles';

const WeatherAndWindCard = () => {
    return (
        <div className="weather-and-wind-card">
        <Header title="Weather & Wind"/>
        <WeatherStatus/>
        <WeatherTiles/>
      </div>
    )
}

export default WeatherAndWindCard