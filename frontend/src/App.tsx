import Topbar from './Components/Topbar';
import AirQualityCard from './Components/AirQuality/AirQualityCard';
import RainfallCard from './Components/Rainfall/RainfallCard'
import './style.css'

function App() {
  return (
    <div className="">
      <Topbar/>
      <AirQualityCard/>
      <RainfallCard/>
    </div>
  );
}

export default App;