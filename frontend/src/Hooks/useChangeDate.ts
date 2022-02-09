let useChangeDate = (day:number, month:number, year:number) => {  
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
    return [day, month, year]
}

export default useChangeDate