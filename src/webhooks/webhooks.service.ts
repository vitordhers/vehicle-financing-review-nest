import {
  BadRequestException,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { SimulationDto } from './models/simulation-dto.model';
import { ConfigService } from '@nestjs/config';
import { banks } from './interfaces/bank.interface';
import { calculateAmortizingPayments } from './functions/calculateAmortizingPayments.function';
import { createDateFromDDMMYYYY } from './functions/createDateFromDDMMYYYY.function';
import { calculateMonthlyInterestRate } from './functions/calculateMonthlyInterestRate.function';
import { mapRevisedPaymentToCashflow } from './functions/mapRevisedPaymentToCashflow.function';
import { DbService } from 'src/db/db.service';
import { SaveReviewDto } from 'src/db/models/save-review.model';
import { InterestRateService } from 'src/interest-rate/interest-rate.service';

@Injectable()
export class WebhooksService implements OnModuleInit {
  webhookToken: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly dbService: DbService,
    private readonly interestRateService: InterestRateService,
  ) {}

  onModuleInit() {
    this.webhookToken = this.configService.get<string>('WEBHOOK_TOKEN');
  }

  async analyzeLoan(data: SimulationDto, token: string) {
    if (token !== this.webhookToken) {
      throw new UnauthorizedException('Invalid validation token');
    }

    const {
      clientName,
      bankDocument,
      contractDate: contractStartDate,
      firstInstallmentDueDate: firstInstallmentDate,
      firstInstallmentValue,
      totalLoaned,
      installments,
      installmentValue,
      paidInstallments,
    } = data;

    const foundBank = banks.find((bank) => bank.document === bankDocument);
    if (!foundBank) {
      return new BadRequestException(
        `Bank with document ${bankDocument} wasn't found`,
      );
    }

    const referenceInterestRate =
      await this.interestRateService.getReferenceInterestRate();

    // const contractDate = new Date(contractStartDate);
    const contractDate = createDateFromDDMMYYYY(contractStartDate);
    // const firstInstallmentDueDate = new Date(firstInstallmentDate);
    const firstInstallmentDueDate =
      createDateFromDDMMYYYY(firstInstallmentDate);
    const dueDay = firstInstallmentDueDate.getDate();

    const revisedPayments = calculateAmortizingPayments(
      totalLoaned,
      installments,
      dueDay,
      referenceInterestRate.interestRateReference / 100,
      contractDate,
      firstInstallmentDueDate,
    );

    const actualCashflows = mapRevisedPaymentToCashflow(
      revisedPayments,
      installmentValue,
    );

    const interestRate = calculateMonthlyInterestRate(actualCashflows);

    if (interestRate <= 0) {
      throw new BadRequestException('Please, insert correct data');
    }

    const saveReviewData = new SaveReviewDto(
      clientName,
      bankDocument,
      contractDate,
      firstInstallmentDueDate,
      firstInstallmentValue,
      totalLoaned,
      installments,
      installmentValue,
      paidInstallments,
      interestRate,
    );

    const uuid = await this.dbService.saveReviewData(saveReviewData);
    return uuid;
  }
}
