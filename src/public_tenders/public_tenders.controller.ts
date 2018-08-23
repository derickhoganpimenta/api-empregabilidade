import { Controller, Get } from '@nestjs/common';
import { PublicTendersService } from './public_tenders.service';
import { PublicTender } from './public_tender.entity';

@Controller('public_tenders')
export class PublicTendersController {
  constructor(private readonly publicTendersService: PublicTendersService) {}

  @Get()
  async findAll(): Promise<PublicTender[]> {
    return await this.publicTendersService.findAll();
  }
}
