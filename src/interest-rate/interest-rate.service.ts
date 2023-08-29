import {
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DbService } from '../db/db.service';
import { UpdateInterestRateDto } from './dto/update-interest-rate.model';

@Injectable()
export class InterestRateService implements OnModuleInit {
  editPassword: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly dbService: DbService,
  ) {}

  onModuleInit() {
    this.editPassword = this.configService.get<string>('EDIT_PASSWORD');
  }

  async updateInterestRateReference(
    data: UpdateInterestRateDto,
    password: string,
  ) {
    if (password !== this.editPassword) {
      throw new UnauthorizedException();
    }

    return await this.dbService.updateReferenceInterestRate(data.newRate);
  }

  async getReferenceInterestRate() {
    return await this.dbService.getReferenceInterestRate();
  }
}
