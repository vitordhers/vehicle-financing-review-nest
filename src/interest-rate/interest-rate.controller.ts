import { Body, Controller, Headers, Put } from '@nestjs/common';
import { UpdateInterestRateDto } from './dto/update-interest-rate.model';
import { InterestRateService } from './interest-rate.service';

@Controller('interest')
export class InterestRateController {
  constructor(private readonly interestRateService: InterestRateService) {}

  @Put()
  async updateReferenceInterestRate(
    @Body() data: UpdateInterestRateDto,
    @Headers('X-PASSWORD') password: string,
  ) {
    return await this.interestRateService.updateInterestRateReference(
      data,
      password,
    );
  }
}
