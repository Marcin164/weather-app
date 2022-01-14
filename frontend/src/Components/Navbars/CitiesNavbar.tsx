import axios from "axios";
import React, { useState, useEffect } from "react";
import NavbarTile from "./NavbarTile";
import SearchInput from "./SearchInput";

interface Props {}

const CitiesNavbar = (props: Props) => {
  const [isCitiesNavbarVisible, setIsCitiesNavbarVisible] = useState(false);
  const [cities, setCities] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const toggleNavbar = () => {
    setIsCitiesNavbarVisible(!isCitiesNavbarVisible);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/getCities")
    .then((result) => setCities(result.data))
    .catch((err) => console.log(err))
  }, [])

  const getValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setSearchValue(value)
  }

  const getFilteredCities = (city:string):Boolean => {
    return city.toLowerCase().includes(searchValue.toLowerCase())
  }

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
        <SearchInput getValue={getValue}/>
        {cities.sort().filter(getFilteredCities).map((city) => <NavbarTile value={city}/>)}
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
