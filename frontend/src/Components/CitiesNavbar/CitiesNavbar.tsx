import {useState} from "react"
import CityTile from "./CityTile";
import "./style.css"

const CitiesNavbar = () => {

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
      <button className="show-cities-navbar__button" onClick={toggleNavbar}>H</button>
      <div className={`cities-navbar ${
          isNavbarVisible ? "show-city-navbar" : "hide-city-navbar"
        }`}>
        <button className="cities-navbar--close" onClick={toggleNavbar}>
          X
        </button>
        <input type="search" className="search"/>
        <CityTile/>
        <CityTile/>
        <CityTile/>
        <CityTile/>
        <CityTile/>
        <CityTile/>
        <CityTile/>
        <CityTile/>
      </div>
      <button
        className={`overlay ${
          isNavbarVisible ? "show-city-overlay" : "hide-city-overlay"
        }`}
        onClick={toggleNavbar}
      />
    </>
  );
};

export default CitiesNavbar;