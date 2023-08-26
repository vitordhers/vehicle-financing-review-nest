import { DAY_IN_MS } from '../constants/one-day-ms.const';

export const getDaysDifference = (date1: Date, date2: Date) => {
  const timeDifferenceInMilliseconds = Math.abs(
    date2.getTime() - date1.getTime(),
  );

  const daysDifference = Math.floor(timeDifferenceInMilliseconds / DAY_IN_MS);

  return daysDifference;
};
