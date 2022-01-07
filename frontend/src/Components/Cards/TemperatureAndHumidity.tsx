import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import Card from "../Card";

interface Props {}

const TemperatureAndHumidity = (props: Props) => {
  return (
    <Card title="Temperature and humidity" className="temperature-humidity-card">
      <LineChart
        width={340}
        height={240}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </Card>
  );
};

export default TemperatureAndHumidity;
