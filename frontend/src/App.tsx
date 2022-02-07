import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import CitiesNavbar from "./Components/Navbars/CitiesNavbar";
import DaysNavbar from "./Components/Navbars/DaysNavbar";
import WeatherBoard from "./Components/WeatherBoard";

export const GetValuesContext = createContext(
  (e: React.ChangeEvent<HTMLInputElement>) => {}
);

function App() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth()+1;
  let year = date.getFullYear();
  const [weather, setWeather] = useState({});
  const [days, setDays] = useState(`${day}.${month}.${year}`);
  const [cities, setCities] = useState("Amsterdam");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getWeather/${cities}/${days}`)
      .then((result) => {
        setWeather(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [days, cities]);

  const getDayValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    setDays(value);
  };

  const getCityValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    setCities(value);
  };

  return (
    <>
      <GetValuesContext.Provider value={getDayValue}>
        <DaysNavbar />
      </GetValuesContext.Provider>
      <WeatherBoard weather={weather} city={cities} day={days}/>
      <GetValuesContext.Provider value={getCityValue}>
        <CitiesNavbar />
      </GetValuesContext.Provider>
    </>
  );
}

export default App;
