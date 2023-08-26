export const getDaysInMonth = (date: Date) => {
  const monthIndex = date.getMonth();
  switch (monthIndex) {
    case 0: // jan
      return 31;
    case 1: // feb
      return isLeapYear(date.getFullYear()) ? 29 : 28;
    case 2: // march
      return 31;
    case 3:
      return 30;
    case 4:
      return 31;
    case 5:
      return 30;
    case 6:
      return 31;
    case 7:
      return 31;
    case 8:
      return 30;
    case 9:
      return 31;
    case 10:
      return 31;
    case 11:
      return 31;
    default:
      return 30;
  }
};

const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
