import React from 'react'
import AirQuality from './Cards/AirQuality'
import Events from './Cards/Events'
import Rainfall from './Cards/Rainfall'
import SunriseAndMoonrise from './Cards/SunriseAndMoonrise'
import TemperatureAndHumidity from './Cards/TemperatureAndHumidity'
import WeatherAndWind from './Cards/WeatherAndWind'

interface Props {
    
}

const WeatherBoard = (props: Props) => {
    return (
        <div className="dashboard">
            <AirQuality />
            <Rainfall/>
            <WeatherAndWind/>
            <SunriseAndMoonrise/>
            <Events/>
            <TemperatureAndHumidity/>
        </div>
    )
}

export default WeatherBoard