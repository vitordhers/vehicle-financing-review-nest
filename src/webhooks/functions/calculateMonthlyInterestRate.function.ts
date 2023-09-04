import { RootFinderOptions, irr } from 'node-irr';
import { Cashflow } from '../interfaces/cashflow.interface';
import { roundToDecimals } from './roundToDecimals';

export const calculateMonthlyInterestRate = (payments: Cashflow[]): number => {
  const cashflows = [-payments[0].debtBalance];
  payments
    .filter((p) => !!p.installmentTotal)
    .forEach((p) => {
      cashflows.push(p.installmentTotal);
    });

  const options: Partial<RootFinderOptions> = {
    epsilon: 0.0000001,
    maxIterations: 1000000,
  };
  const rate = irr(cashflows, options);
  return roundToDecimals(rate, 4);
};
