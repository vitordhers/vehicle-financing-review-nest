import { Module } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { WebhooksController } from './webhooks.controller';
import { DbModule } from 'src/db/db.module';
import { InterestRateModule } from 'src/interest-rate/interest-rate.module';

@Module({
  imports: [DbModule, InterestRateModule],
  controllers: [WebhooksController],
  providers: [WebhooksService],
})
export class WebhooksModule {}
