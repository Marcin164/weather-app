import Header from "../Header"
import RainfallChart from "./RainfallChart"
import './style.css'

const RainfallCard = () => {
    return (
        <div className="rainfall-card">
        <Header title="Rainfall"/>
        <RainfallChart/>
      </div>
    )
}

export default RainfallCard