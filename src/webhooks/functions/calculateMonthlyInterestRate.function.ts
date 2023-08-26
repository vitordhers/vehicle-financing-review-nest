import { RootFinderOptions, irr } from 'node-irr';
import { Cashflow } from '../interfaces/cashflow.interface';
import { roundToDecimals } from './roundToDecimals';

export const calculateMonthlyInterestRate = (payments: Cashflow[]): number => {
  const data = payments.map((p, i) => {
    if (i === 0) {
      return -p.debtBalance;
    }
    return p.installmentTotal;
  });

  console.log({ data });

  const options: Partial<RootFinderOptions> = {
    epsilon: 0.0000001,
    maxIterations: 1000000,
  };
  const rate = irr(data, options);
  return roundToDecimals(rate, 4);
};
