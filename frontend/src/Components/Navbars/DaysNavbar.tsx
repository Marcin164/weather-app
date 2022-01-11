import React, { useState } from "react";
import NavbarTile from "./NavbarTile";

interface Props {}

const DaysNavbar = (props: Props) => {
  const [isDaysNavbarVisible, setIsDaysNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsDaysNavbarVisible(!isDaysNavbarVisible);
  };

  return (
    <>
      <button className="show-navbar show-days-navbar" onClick={toggleNavbar}>
        <img src="/images/Clock.svg" alt="" className="show-navbar-image"></img>
      </button>
      <div
        className={`navbar days-navbar ${
          isDaysNavbarVisible ? "show-day-navbar" : "hide-day-navbar"
        }`}
      >
        <button className="navbar-close" onClick={toggleNavbar}>
          X
        </button>
        <NavbarTile />
      </div>
      <button
        className={`overlay ${
          isDaysNavbarVisible ? "show-overlay" : "hide-overlay"
        }`}
        onClick={toggleNavbar}
      />
    </>
  );
};

export default DaysNavbar;
