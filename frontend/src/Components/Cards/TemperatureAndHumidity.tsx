import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
} from "recharts";
import Card from "../Card";

interface Props {
  temperatureAndHumidityValues:Array<any>
}

const TemperatureAndHumidity = (props: Props) => {
  return (
    <Card
      title="Temperature and humidity"
      className="temperature-humidity-card"
    >
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={props.temperatureAndHumidityValues}>
          <XAxis dataKey="hour" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
          <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TemperatureAndHumidity;
