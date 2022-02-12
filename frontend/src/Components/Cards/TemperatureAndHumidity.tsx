import {TemperatureAndHumidityIF} from "../../Helper/Interfaces"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";
import Card from "./Card";

interface Props {
  temperatureAndHumidityValues:Array<TemperatureAndHumidityIF>
}

const TemperatureAndHumidity = (props: Props) => {
  if (props.temperatureAndHumidityValues === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <Card
      title="Temperature and humidity"
      className="temperature-humidity-card"
    >
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={props.temperatureAndHumidityValues}>
          <XAxis dataKey="hour" />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
          <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TemperatureAndHumidity;
