import { Cashflow } from '../interfaces/cashflow.interface';
import { Payment } from '../interfaces/payment.interface';

export const mapRevisedPaymentToCashflow = (
  revisedPayments: Payment[],
  actualInstallment: number,
) => {
  return revisedPayments.map((p, i) => {
    let cashflow: Cashflow;
    if (i === 0) {
      cashflow = {
        debtBalance: p.debtBalance,
        dueDate: p.dueDate,
        installmentTotal: 0,
      };
      return cashflow;
    }
    cashflow = {
      debtBalance: p.debtBalance,
      dueDate: p.dueDate,
      installmentTotal: p.installmentTotal === 0 ? 0 : actualInstallment,
    };
    return cashflow;
  });
};
