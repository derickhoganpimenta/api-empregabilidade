import { Controller, Get, Param } from '@nestjs/common';
import { PublicTendersService } from './public_tenders.service';
import { PublicTender } from './public_tender.entity';
import { Candidate } from '../candidates/candidate.entity';

@Controller('public_tenders')
export class PublicTendersController {
  constructor(private readonly publicTendersService: PublicTendersService) {}

  @Get()
  async findAll(): Promise<PublicTender[]> {
    return await this.publicTendersService.findAll();
  }

  @Get(":document_number")
  async findOne(@Param() params): Promise<PublicTender> {
    return await this.publicTendersService.findOne(params.document_number);
  }

  @Get(":document_number/candidates")
  async findBy(@Param() params): Promise<PublicTender> {
    return await this.publicTendersService.findBy(params.document_number);
  }
}
