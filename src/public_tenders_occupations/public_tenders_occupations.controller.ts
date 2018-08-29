import { Controller, Get } from '@nestjs/common';
import { PublicTendersOccupationsService } from './public_tenders_occupations.service';
import { PublicTenderOccupation } from './public_tender_occupation.entity';

@Controller('public_tenders_occupations')
export class PublicTendersOccupationsController {
  constructor(private readonly publicTendersOccupationsService: PublicTendersOccupationsService) {}

  @Get()
  async findAll(): Promise<PublicTenderOccupation[]> {
    return await this.publicTendersOccupationsService.findAll();
  }
}
