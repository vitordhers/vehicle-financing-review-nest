import { Module } from '@nestjs/common';
import { InterestRateController } from './interest-rate.controller';
import { DbModule } from '../db/db.module';
import { InterestRateService } from './interest-rate.service';

@Module({
  imports: [DbModule],
  controllers: [InterestRateController],
  providers: [InterestRateService],
  exports: [InterestRateService],
})
export class InterestRateModule {}
