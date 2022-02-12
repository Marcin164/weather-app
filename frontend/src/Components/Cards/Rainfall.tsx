import { RainFallIF } from "../../Helper/Interfaces";
import {ResponsiveContainer, BarChart, XAxis, Bar, Tooltip } from "recharts";
import Card from "./Card";

interface Props {
  rainfallValues:Array<RainFallIF>
}

const Rainfall = (props: Props) => {
  if (props.rainfallValues === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <Card title="Rainfall" className="rainfall-card">
    <ResponsiveContainer width="100%" height={240}>
      <BarChart className="chart" height={240} data={props.rainfallValues}>
        <XAxis dataKey="hour" />
        <Bar dataKey="rainfall" fill="#1A5F7A"/>
        <Tooltip/>
      </BarChart>
    </ResponsiveContainer>
    </Card>
  );
};

export default Rainfall;