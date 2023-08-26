import { Review } from './review.model';
import { OmitType } from '@nestjs/swagger';

export class SaveReviewDto extends OmitType(Review, ['uuid'] as const) {
  constructor(
    public clientName: string,
    public bankDocument: string,
    public contractStartDate: Date,
    public firstInstallmentDate: Date,
    public firstInstallmentValue: number,
    public totalLoaned: number,
    public installments: number,
    public installmentValue: number,
    public paidInstallments: number,
    public effectiveInterestRate: number,
  ) {
    super();
  }
}
