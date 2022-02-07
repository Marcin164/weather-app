import React from "react";
import {ResponsiveContainer, BarChart, XAxis, Bar, Tooltip } from "recharts";
import Card from "../Card";

interface Props {
  rainfallValues:Array<Object>
}

const Rainfall = (props: Props) => {
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