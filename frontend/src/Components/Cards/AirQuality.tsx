import React from 'react'
import Card from '../Card'
import AirQualityInfo from './AirQualityInfo'
import AirQualityStatus from './AirQualityStatus'

interface Props {
    
}

const AirQuality = (props: Props) => {
    return (
        <Card title="Air Quality" className="air-quality-card">
            <AirQualityStatus/>
            <div className="air-quality-info">
                <AirQualityInfo/>
                <AirQualityInfo/>
                <AirQualityInfo/>
                <AirQualityInfo/>
            </div>
        </Card>
    )
}

export default AirQuality
