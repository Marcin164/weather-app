import React from "react";
import Card from "../Card";
import SunriseAndMoonriseInfo from "./SunriseAndMoonriseInfo";

interface Props {}

const SunriseAndMoonrise = (props: Props) => {
  return (
    <Card title="Sunrise and moonrise" className="sunrise-moonrise-card">
        <SunriseAndMoonriseInfo/>
        <SunriseAndMoonriseInfo/>
    </Card>
  );
};

export default SunriseAndMoonrise;