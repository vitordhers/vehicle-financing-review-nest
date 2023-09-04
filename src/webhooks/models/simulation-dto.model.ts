import { IdentityType } from '../enums/identityType.enum';

export class SimulationDto {
  clientName: string;
  identityType: IdentityType;
  bankName: string;
  totalLoaned: number;
  contractDate: string;
  firstInstallmentDueDate: string;
  installments: number;
  installmentValue: number; // Price table interest
  paidInstallments: number;
}
