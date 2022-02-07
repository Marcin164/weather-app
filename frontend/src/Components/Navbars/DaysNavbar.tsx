import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarClose from "./NavbarClose";
import NavbarShow from "./NavbarShow";
import NavbarTile from "./NavbarTile";
import Overlay from "./Overlay";

const DaysNavbar = () => {
  const [isDaysNavbarVisible, setIsDaysNavbarVisible] = useState(false);
  const [days, setDays] = useState([""])

  const toggleNavbar = () => {
    setIsDaysNavbarVisible(!isDaysNavbarVisible);
  };

  const createDays = () => {
    let array:Array<string> = []

    let date:Date = new Date()
    let day:number = date.getDate()-1
    let month:number = date.getMonth()+1
    let year:number = date.getFullYear()

    for(let i:number = 0 ; i<7 ; i++){
      day += 1
      if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        if (day > 31) {
          day = 1;
    
          if(month + 1 > 12){
            month = 1
            year += 1
          }else{
            month+=1
          }
        }
      }
      if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day > 30) {
          day = 1;
          
          if(month + 1 > 12){
            month = 1
            year += 1
          }else{
            month+=1
          }
    
        }
      }
      if (month === 2) {
        if ((0 === year % 4 && 0 !== year % 100) || 0 === year % 400) {
          if (day > 29) {
            day = 1;
    
            if(month + 1 > 12){
              month = 1
              year += 1
            }else{
              month+=1
            }
    
          }
        } else {
          if (day > 28) {
            day = 1;
    
            if(month + 1 > 12){
              month = 1
              year += 1
            }else{
              month+=1
            }
    
          }
        }
      }
      let fullDate = `${day}.${month}.${year}`
      array.push(fullDate)
    }
    setDays(array)
  }

  useEffect(() => {
    createDays()
  }, [])

  return (
    <>
      <NavbarShow onClick={toggleNavbar} className="show-days-navbar"/>
      <Navbar className={`days-navbar ${isDaysNavbarVisible ? "show-day-navbar" : "hide-day-navbar"}`}>
        <NavbarClose onClick={toggleNavbar} />
        {
          days.map((day) => <NavbarTile value={day}/>)
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
