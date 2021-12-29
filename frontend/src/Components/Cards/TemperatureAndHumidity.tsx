import React from 'react'
import Header from '../Header'
import TemperatureAndHumidityChart from '../TemperatureAndHumidityChart'

const TemperatureAndHumidity = () => {
    return (
        <div className="temperature-and-humidity-card card">
            <Header title="Temperature & Humidity"/>
            <TemperatureAndHumidityChart/>
        </div>
    )
}

export default TemperatureAndHumidity
