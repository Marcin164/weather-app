import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarClose from "./NavbarClose";
import NavbarShow from "./NavbarShow";
import NavbarTile from "./NavbarTile";
import Overlay from "./Overlay";
import Helper from "../../Helper/dateHelper";

const DaysNavbar = () => {
  const [isDaysNavbarVisible, setIsDaysNavbarVisible] = useState(false);
  const [days, setDays] = useState([""])

  const toggleNavbar = () => {
    setIsDaysNavbarVisible(!isDaysNavbarVisible);
  };

  const createDays = () => {
    let array:Array<string> = []

    let date:Date = new Date()
    let dayNumber:number = date.getDate()
    let monthNumber:number = date.getMonth()+1
    let yearNumber:number = date.getFullYear()
    let helper:Helper = new Helper()

    for(let i:number = 0 ; i<7 ; i++){
      let dateObject = helper.changeMonthAndYear(dayNumber, monthNumber, yearNumber, i)
      let fullDate = `${dateObject.day}.${dateObject.month}.${dateObject.year}`
      array.push(fullDate)
    }
    setDays(array)
  }

  useEffect(() => {
    createDays()
  }, [])

  return (
    <>
      <NavbarShow onClick={toggleNavbar} className="show-days-navbar" image="Calendar"/>
      <Navbar className={`days-navbar ${isDaysNavbarVisible ? "show-day-navbar" : "hide-day-navbar"}`}>
        <NavbarClose onClick={toggleNavbar} />
        {
          days.map((day) => <NavbarTile key={day} value={day}/>)
        }
      </Navbar>
      <Overlay
        isNavbarVisible={isDaysNavbarVisible}
        onClick={toggleNavbar}
      />
    </>
  );
};

export default DaysNavbar;
