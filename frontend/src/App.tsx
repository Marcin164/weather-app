import Topbar from './Components/Topbar';
import AirQualityCard from './Components/AirQuality/AirQualityCard';
import RainfallCard from './Components/Rainfall/RainfallCard'
import WeatherAndWindCard from './Components/WeatherAndWind/WeatherAndWindCard';
import './style.css'
import SunriseCard from './Components/Sunrise/SunriseCard';
import SpecialEvents from './Components/SpecialEvents/SpecialEvents';
import TemperatureAndHumidity from './Components/TemperatureAndHumidity/TemperatureAndHumidity';

function App() {
  return (
    <div className="">
      <Topbar/>
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