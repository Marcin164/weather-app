import React, { useState } from "react";
import NavbarTile from "./NavbarTile";
import SearchInput from "./SearchInput";

interface Props {}

const CitiesNavbar = (props: Props) => {
  const [isCitiesNavbarVisible, setIsCitiesNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsCitiesNavbarVisible(!isCitiesNavbarVisible);
  };

  return (
    <>
      <button className="show-navbar show-cities-navbar" onClick={toggleNavbar}>
        H
      </button>
      <div
        className={`navbar cities-navbar ${
          isCitiesNavbarVisible ? "show-city-navbar" : "hide-city-navbar"
        }`}
      >
        <button className="navbar-close" onClick={toggleNavbar}>
          X
        </button>
        <SearchInput />
        <NavbarTile />
      </div>
      <button
        className={`overlay ${
          isCitiesNavbarVisible ? "show-overlay" : "hide-overlay"
        }`}
        onClick={toggleNavbar}
      />
    </>
  );
};

export default CitiesNavbar;
