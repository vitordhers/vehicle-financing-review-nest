import { IdentityType } from '../enums/identityType.enum';

export class SimulationDto {
  clientName: string;
  identityType: IdentityType;
  bankDocument: string;
  totalLoaned: number;
  contractDate: string;
  firstInstallmentDueDate: string;
  firstInstallmentValue: number;
  installments: number;
  installmentValue: number; // Price table interest
  paidInstallments: number;
}
