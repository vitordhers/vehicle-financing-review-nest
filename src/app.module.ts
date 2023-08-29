import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WebhooksModule } from './webhooks/webhooks.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { InterestRateModule } from './interest-rate/interest-rate.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule,
    InterestRateModule,
    WebhooksModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
