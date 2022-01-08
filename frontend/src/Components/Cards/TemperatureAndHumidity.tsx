import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import Card from "../Card";

interface Props {}

const TemperatureAndHumidity = (props: Props) => {
  return (
    <Card
      title="Temperature and humidity"
      className="temperature-humidity-card"
    >
      <ResponsiveContainer width="100%" height={240}>
        <LineChart>
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TemperatureAndHumidity;
