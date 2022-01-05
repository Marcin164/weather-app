import React from 'react'
import AirQuality from './AirQuality'

interface Props {
    
}

const WeatherBoard = (props: Props) => {
    return (
        <div className="dashboard">
            <AirQuality />
        </div>
    )
}

export default WeatherBoard
