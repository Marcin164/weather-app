import React from "react";
import Header from "../Header";
import SunriseInfo from "../SunriseInfo";

const Sunrise = () => {
  return (
    <div className="sunrise-card card">
      <Header title="Sunrise & Moonrise" />
      <SunriseInfo />
      <SunriseInfo />
    </div>
  );
};

export default Sunrise;
