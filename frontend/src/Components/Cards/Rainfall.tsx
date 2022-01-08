import React from "react";
import {ResponsiveContainer, BarChart, XAxis, Bar } from "recharts";
import Card from "../Card";

interface Props {}

const Rainfall = (props: Props) => {
  return (
    <Card title="Rainfall" className="rainfall-card">
    <ResponsiveContainer width="100%" height={240}>
      <BarChart className="chart" height={240}>
        <XAxis />
        <Bar dataKey="" />
      </BarChart>
    </ResponsiveContainer>
    </Card>
  );
};

export default Rainfall;