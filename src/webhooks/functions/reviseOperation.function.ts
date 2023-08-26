import { Payment } from '../interfaces/payment.interface';
import { getGracePeriod } from './getGracePeriod.function';

const reviseOperation = (
  revisedPayments: Payment[],
  effectivePayments: Payment[],
  firstInstallmentValue: number,
  paidInstallmentsTotal: number,
  installments: number,
) => {
  let actualPayments = [...effectivePayments];
  const paidInstallments = Math.floor(
    paidInstallmentsTotal / firstInstallmentValue,
  );
  if (paidInstallments !== installments) {
    const lastPaidInstallmentIndex = effectivePayments.findIndex(
      (p) => p.n === paidInstallments,
    );
    actualPayments = actualPayments.map((p, i) => {
      if (i <= lastPaidInstallmentIndex) {
        return p;
      }
      const updatedPayment: Payment = {
        ...p,
        amortizationTotal: 0,
        installmentTotal: 0,
      };
      return updatedPayment;
    });
  }
};
