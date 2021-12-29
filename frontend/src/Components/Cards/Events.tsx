import React from 'react'
import Header from '../Header'
import Event from '../Event'

const Events = () => {
    return (
        <div className="special-events-card card">
        <Header title="Special Events" />
        <div className="events-panel">
          <Event />
        </div>
      </div>
    )
}

export default Events
