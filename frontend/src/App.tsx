import { useEffect, useState } from 'react';
import axios from 'axios';
import CitiesNavbar from './Components/Navbars/CitiesNavbar';
import DaysNavbar from './Components/Navbars/DaysNavbar';
import WeatherBoard from './Components/WeatherBoard';

function App() {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios.get("http://127.0.0.1:4000/getWeather/Dubai/30.12.2021")
    .then((result) => setWeather(result.data))
    .catch((err) => {console.log(err)})
  }, [])

  return (
    <>
      <DaysNavbar/>
      <WeatherBoard/>
      <CitiesNavbar/>
    </>
  );
}

export default App;