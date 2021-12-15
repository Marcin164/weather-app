import Header from "../Header";
import Event from "./Event";
import "./style.css";

const SpecialEvents = () => {
  return (
    <div className="special-events-card">
      <Header title="Special Events" />
      <div className="events-panel">
        <Event />
      </div>
    </div>
  );
};

export default SpecialEvents;
