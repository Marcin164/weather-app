import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarClose from "./NavbarClose";
import NavbarTile from "./NavbarTile";
import Overlay from "./Overlay";
import SearchInput from "./SearchInput";
import NavbarShow from "./NavbarShow";

const CitiesNavbar = () => {
  const [isCitiesNavbarVisible, setIsCitiesNavbarVisible] = useState(false);
  const [cities, setCities] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const toggleNavbar = () => {
    setIsCitiesNavbarVisible(!isCitiesNavbarVisible);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/getCities")
      .then((result) => setCities(result.data))
      .catch((err) => console.log(err));
  }, []);

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value;
    setSearchValue(value);
  };

  const getFilteredCities = (city: string): Boolean => {
    return city.toLowerCase().includes(searchValue.toLowerCase());
  };

  return (
    <>
      <NavbarShow onClick={toggleNavbar} className="show-cities-navbar"/>
      <Navbar className={`cities-navbar ${
            isCitiesNavbarVisible ? "show-city-navbar" : "hide-city-navbar"
          }`}>
        <NavbarClose onClick={toggleNavbar} />
        <SearchInput getValue={getValue} />
        {cities
          .sort()
          .filter(getFilteredCities)
          .map((city) => (
            <NavbarTile key={city} value={city} />
          ))}
      </Navbar>
      <Overlay
        isNavbarVisible={isCitiesNavbarVisible}
        onClick={toggleNavbar}
      />
    </>
  );
};

export default CitiesNavbar;
