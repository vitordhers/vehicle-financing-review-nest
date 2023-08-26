import { getDaysInMonth } from './getDaysInMonth.function';

//monthlyInterestRate in percentage. i.e 2% = 0.02
export const calculateDailyInterestRate = (
  monthlyInterestRatePercent: number,
  date: Date,
) => {
  const daysInMonth = getDaysInMonth(date);
  const dailyInterestRate =
    Math.pow(1 + monthlyInterestRatePercent, 1 / daysInMonth) - 1;
  return dailyInterestRate;
};
