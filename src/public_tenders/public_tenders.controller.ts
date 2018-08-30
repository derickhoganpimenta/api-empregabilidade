import { Controller, Get, Param } from '@nestjs/common';
import { PublicTendersService } from './public_tenders.service';
import { PublicTender } from './public_tender.entity';

@Controller('public_tenders')
export class PublicTendersController {
  constructor(private readonly publicTendersService: PublicTendersService) {}

  @Get()
  async findAll(): Promise<PublicTender[]> {
    return await this.publicTendersService.findAll();
  }

  @Get(":code")
  async findOne(@Param() params): Promise<PublicTender> {
    return await this.publicTendersService.findOne(params.code);
  }

  @Get(":code/candidates")
  async findCandidates(@Param() params): Promise<String[]> {
    return await this.publicTendersService.findCandidates(params.code);
  }
}
