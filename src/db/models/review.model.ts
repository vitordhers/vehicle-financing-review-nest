export class Review {
  public uuid: string;
  public clientName: string;
  public bankDocument: string;
  public contractStartDate: Date;
  public firstInstallmentDate: Date;
  public firstInstallmentValue: number;
  public totalLoaned: number;
  public installments: number;
  public installmentValue: number;
  public paidInstallments: number;
  public effectiveInterestRate: number;
}
