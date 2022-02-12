export default class Helper {

  changeMonthAndYear = (day: number, month: number, year: number, numberOfDay: number = 0) => {
    let controlDay = day + numberOfDay;
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12
    ) {
      if (controlDay > 31) {
        controlDay = 1;

        if (month + 1 > 12) {
          month = 1;
          year += 1;
        } else {
          month += 1;
        }
      }
    }
    if (
      month === 4 ||
      month === 6 ||
      month === 9 ||
      month === 11
    ) {
      if (controlDay > 30) {
        controlDay = 1;

        if (month + 1 > 12) {
          month = 1;
          year += 1;
        } else {
          month += 1;
        }
      }
    }
    if (month === 2) {
      if (
        (0 === year % 4 && 0 !== year % 100) ||
        0 === year % 400
      ) {
        if (controlDay > 29) {
          controlDay = 1;

          if (month + 1 > 12) {
            month = 1;
            year += 1;
          } else {
            month += 1;
          }
        }
      } else {
        if (controlDay > 28) {
          controlDay = 1;

          if (month + 1 > 12) {
            month = 1;
            year += 1;
          } else {
            month += 1;
          }
        }
      }
    }

    return { year: year, month: month, day: controlDay };
  };
}
