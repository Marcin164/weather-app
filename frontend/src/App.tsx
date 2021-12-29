import Topbar from './Components/Topbar';
import AirQuality from './Components/Cards/AirQuality';
import Rainfall from './Components/Cards/Rainfall'
import WeatherAndWind from './Components/Cards/WeatherAndWind';
import './style.css'
import Sunrise from './Components/Cards/Sunrise';
import SpecialEvents from './Components/Cards/Events';
import TemperatureAndHumidity from './Components/Cards/TemperatureAndHumidity';
import DaysNavbar from './Components/DaysNavbar/DaysNavbar';
import CitiesNavbar from './Components/CitiesNavbar/CitiesNavbar';

function App() {
  return (
    <div className="dashboard">
      <Topbar/>
      <DaysNavbar/>
      <AirQuality/>
      <Rainfall/>
      <WeatherAndWind/>
      <Sunrise/>
      <SpecialEvents/>
      <TemperatureAndHumidity/>
      <CitiesNavbar/>
    </div>
  );
}

export default App;