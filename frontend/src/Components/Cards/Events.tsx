import Card from "./Card";
import EventInfo from "./EventInfo";

interface Props {
  eventsValues: Array<string>
}

const Events = (props: Props) => {
  if (props.eventsValues === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <Card title="Special Events" className="events-card">
      <div className="events-panel">
        {props.eventsValues.map((eventValue:any) => <EventInfo key={eventValue} event={eventValue}/>)}
      </div>
    </Card>
  );
};

export default Events;