import { Body, Controller, Headers, Post } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { SimulationDto } from './models/simulation-dto.model';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post()
  async analyzeLoan(
    @Body() data: SimulationDto,
    @Headers('X-VALIDATION-TOKEN') token: string,
  ) {
    return await this.webhooksService.analyzeLoan(data, token);
  }
}
