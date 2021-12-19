import { useState } from "react";
import DayTile from "./DayTile";
import "./style.css";

const DaysNavbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
      <button className="show-navbar__button" onClick={toggleNavbar}>
        +
      </button>
      <div
        className={`days-navbar ${
          isNavbarVisible ? "show-day-navbar" : "hide-day-navbar"
        }`}
      >
        <button className="days-navbar--close" onClick={toggleNavbar}>
          X
        </button>
        <DayTile />
        <DayTile />
        <DayTile />
        <DayTile />
        <DayTile />
        <DayTile />
        <DayTile />
      </div>
      <button
        className={`overlay ${
          isNavbarVisible ? "show-day-overlay" : "hide-day-overlay"
        }`}
        onClick={toggleNavbar}
      />
    </>
  );
};

export default DaysNavbar;
