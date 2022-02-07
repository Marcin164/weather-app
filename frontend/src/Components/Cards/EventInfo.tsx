import React from 'react'

interface Props {
    event:any
}

const EventInfo = (props: Props) => {
    return (
        <div className="event-info">
            <img src={`/images/${props.event}.svg`} alt="" className="event-info-img"/>
        </div>
    )
}

export default EventInfo
