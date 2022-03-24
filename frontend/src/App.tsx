import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import CitiesNavbar from "./Components/Navbars/CitiesNavbar";
import DaysNavbar from "./Components/Navbars/DaysNavbar";
import WeatherBoard from "./Components/WeatherBoard";
import { WeatherIF } from "./Helper/Interfaces";

export const GetValuesContext = createContext(
  (e: React.ChangeEvent<HTMLInputElement>) => {}
);

function App() {
  let date:Date = new Date();
  let day:number = date.getDate();
  let month:number = date.getMonth()+1;
  let year:number = date.getFullYear();
  const [weather, setWeather] = useState<any>({});
  const [days, setDays] = useState<string>(`${day}.${month}.${year}`);
  const [cities, setCities] = useState<string>("Amsterdam");

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
    let value:string = e.currentTarget.value;
    setDays(value);
  };

  const getCityValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value:string = e.currentTarget.value;
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
