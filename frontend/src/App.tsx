import Topbar from './Components/Topbar';
import AirQualityCard from './Components/AirQuality/AirQualityCard';
import RainfallCard from './Components/Rainfall/RainfallCard'
import WeatherAndWindCard from './Components/WeatherAndWind/WeatherAndWindCard';
import './style.css'
import SunriseCard from './Components/Sunrise/SunriseCard';

function App() {
  return (
    <div className="">
      <Topbar/>
      <AirQualityCard/>
      <RainfallCard/>
      <WeatherAndWindCard/>
      <SunriseCard/>
    </div>
  );
}

export default App;