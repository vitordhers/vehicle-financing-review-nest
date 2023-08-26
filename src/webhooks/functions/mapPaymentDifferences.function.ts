import { PaymentDifference } from '../interfaces/payment-difference.interface';
import { Payment } from '../interfaces/payment.interface';

export const mapPaymentDifferences = (
  revisedPayments: Payment[],
  actualPayments: Payment[],
) => {
  return revisedPayments.map((p, i) => {
    const result: PaymentDifference = {
      n: i + 1,
      dueDateStr: p.dueDate.toLocaleDateString('pt-BR'),
      revisedInstallment: p,
      actualInstallment: actualPayments[i],
      installmentDifference:
        actualPayments[i].installmentTotal - p.installmentTotal,
      installmentDifferencePct:
        Math.abs(actualPayments[i].installmentTotal - p.installmentTotal) /
        p.installmentTotal,
    };
    return result;
  });
};
