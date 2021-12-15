import Header from "../Header"
import "./style.css"
import TemperatureAndHumidityChart from "./TemperatureAndHumidityChart"

const TemperatureAndHumidity = () => {
    return (
        <div className="temperature-and-humidity-card">
            <Header title="Temperature & Humidity"/>
            <TemperatureAndHumidityChart/>
        </div>
    )
}

export default TemperatureAndHumidity
