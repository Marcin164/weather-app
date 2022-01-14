import React, { useState, useEffect } from "react";
import NavbarTile from "./NavbarTile";

const DaysNavbar = () => {
  const [isDaysNavbarVisible, setIsDaysNavbarVisible] = useState(false);
  const [days, setDays] = useState([""])

  const toggleNavbar = () => {
    setIsDaysNavbarVisible(!isDaysNavbarVisible);
  };

  const createDays = () => {
    let array:Array<string> = []

    let date:Date = new Date()
    let day:number = date.getDate()
    let month:number = date.getMonth()+1
    let year:number = date.getFullYear()

    for(let i:number = 0 ; i<7 ; i++){
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
      let fullDate = `${day+i}.${month}.${year}`
      array.push(fullDate)
    }
    setDays(array)
  }

  useEffect(() => {
    createDays()
  }, [])

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
        {
          days.map((day) => <NavbarTile value={day}/>)
        }
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
