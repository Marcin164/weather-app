import Header from "../Header"
import RainfallChart from "./RainfallChart"


const Card = () => {
    return (
        <div className="card">
        <Header title="Rainfall"/>
        <RainfallChart/>
      </div>
    )
}

export default Card