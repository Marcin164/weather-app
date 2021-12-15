import Topbar from './Components/Topbar';
import AirQualityCard from './Components/AirQuality/AirQualityCard';
import RainfallCard from './Components/Rainfall/RainfallCard'
import WeatherAndWindCard from './Components/WeatherAndWind/WeatherAndWindCard';
import './style.css'
import SunriseCard from './Components/Sunrise/SunriseCard';
import SpecialEvents from './Components/SpecialEvents/SpecialEvents';
import TemperatureAndHumidity from './Components/TemperatureAndHumidity/TemperatureAndHumidity';
import DaysNavbar from './Components/DaysNavbar/DaysNavbar';

function App() {
  return (
    <div className="dashboard">
      <Topbar/>
      <DaysNavbar/>
      <AirQualityCard/>
      <RainfallCard/>
      <WeatherAndWindCard/>
      <SunriseCard/>
      <SpecialEvents/>
      <TemperatureAndHumidity/>
    </div>
  );
}

export default App;