import React from "react";
import Card from "../Card";
import EventInfo from "./EventInfo";

interface Props {}

const Events = (props: Props) => {
  return (
    <Card title="Special Events" className="events-card">
      <div className="events-panel">
        <EventInfo/>
      </div>
    </Card>
  );
};

export default Events;
