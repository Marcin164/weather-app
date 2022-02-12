import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import CitiesNavbar from "./Components/Navbars/CitiesNavbar";
import DaysNavbar from "./Components/Navbars/DaysNavbar";
import WeatherBoard from "./Components/WeatherBoard";

export const GetValuesContext = createContext(
  (e: React.ChangeEvent<HTMLInputElement>) => {}
);

function App() {
  let date:Date = new Date();
  let day:number = date.getDate();
  let month:number = date.getMonth()+1;
  let year:number = date.getFullYear();
  const [weather, setWeather] = useState({
    data: [{  
      hour: 0,
      humidity: 0,
      temperature: 0,
      windStrength: 0,
      windDirection: "",
      pressure: 0,
      weather: "",
      rainFall: 0,
    }],
    airQuality: [{  
      tag: "",
      value: 0
    }],
    airQualityStatus: {  
      title: "",
      subTitle: ""
    },
    events: [""],
    sunRise: "",
    moonRise: "",
  });
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
