import {LineChart, Line, XAxis, YAxis, Tooltip} from "recharts"

const TemperatureAndHumidityChart = () => {
    return (
<div className="temperature-and-humidity-chart">
                <LineChart>
                    <Line type="monotone" stroke="#EB4646"/>
                    <XAxis/>
                    <YAxis/>
                    <Tooltip/>
                </LineChart>
            </div>
    )
}

export default TemperatureAndHumidityChart
