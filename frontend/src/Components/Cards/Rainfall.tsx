import React from "react";
import { BarChart, XAxis, Bar } from "recharts";
import Card from "../Card";

interface Props {}

const Rainfall = (props: Props) => {
  return (
    <Card title="Rainfall" className="rainfall-card">
      <BarChart>
        <XAxis />
        <Bar dataKey="" />
      </BarChart>
    </Card>
  );
};

export default Rainfall;
