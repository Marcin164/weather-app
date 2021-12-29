import React from 'react'
import Header from '../Header'
import RainfallChart from '../RainfallChart'

const Rainfall = () => {
    return (
        <div className="rainfall-card card">
        <Header title="Rainfall"/>
        <RainfallChart/>
      </div>
    )
}

export default Rainfall
